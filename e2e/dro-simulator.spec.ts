import { test, expect } from '@playwright/test';

test.describe('DRO Simulator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays the DRO interface with all main components', async ({ page }) => {
    // Check if the main DRO container is visible
    await expect(page.locator('#dro')).toBeVisible();

    // Check display section with three axis readouts
    const display = page.locator('section.display');
    await expect(display).toBeVisible();
    await expect(display.locator('output[name="x"]')).toContainText('0.000');
    await expect(display.locator('output[name="y"]')).toContainText('0.000');
    await expect(display.locator('output[name="z"]')).toContainText('0.000');

    // Check axis panel buttons
    const axisPanel = page.locator('fieldset.axis-panel');
    await expect(axisPanel).toBeVisible();
    await expect(axisPanel.getByRole('button', { name: 'X', exact: true })).toBeVisible();
    await expect(axisPanel.getByRole('button', { name: 'X0', exact: true })).toBeVisible();
    await expect(axisPanel.getByRole('button', { name: 'Y', exact: true })).toBeVisible();
    await expect(axisPanel.getByRole('button', { name: 'Y0', exact: true })).toBeVisible();
    await expect(axisPanel.getByRole('button', { name: 'Z', exact: true })).toBeVisible();
    await expect(axisPanel.getByRole('button', { name: 'Z0', exact: true })).toBeVisible();

    // Check numeric keypad
    const keypad = page.locator('fieldset.keypad');
    await expect(keypad).toBeVisible();
    
    // Check all numeric buttons (0-9)
    for (let i = 0; i <= 9; i++) {
      await expect(keypad.locator('button', { hasText: i.toString() })).toBeVisible();
    }
    
    // Check special keypad buttons
    await expect(keypad.locator('button', { hasText: '±' })).toBeVisible();
    await expect(keypad.locator('button', { hasText: '.' })).toBeVisible();
    await expect(keypad.locator('button', { hasText: 'C' })).toBeVisible();
    await expect(keypad.locator('button', { hasText: 'ENT' })).toBeVisible();

    // Check bottom toolbar
    const bottomNav = page.locator('fieldset.bottom');
    await expect(bottomNav).toBeVisible();
    await expect(bottomNav.locator('button', { hasText: 'abs/inc' })).toBeVisible();
    await expect(bottomNav.locator('button', { hasText: 'in/mm' })).toBeVisible();
    await expect(bottomNav.locator('button', { hasText: 'fn' })).toBeVisible();
    await expect(bottomNav.locator('button', { hasText: '→0' })).toBeVisible();

    // Check function keys
    const fkeys = page.locator('fieldset.fkeys');
    await expect(fkeys).toBeVisible();
    await expect(fkeys.locator('button', { hasText: 'F1' })).toBeVisible();
    await expect(fkeys.locator('button', { hasText: 'F2' })).toBeVisible();
    await expect(fkeys.locator('button', { hasText: 'F3' })).toBeVisible();
    await expect(fkeys.locator('button', { hasText: 'F4' })).toBeVisible();
    await expect(fkeys.locator('button', { hasText: 'x =' })).toBeVisible();
    await expect(fkeys.locator('button', { hasText: '½' })).toBeVisible();
    await expect(fkeys.locator('button', { hasText: 'Ø 8' })).toBeVisible();
    await expect(fkeys.locator('button', { hasText: 'n' })).toBeVisible();

    // Check power button
    await expect(page.locator('.power-btn')).toBeVisible();
  });

  test('has proper ARIA labels for accessibility', async ({ page }) => {
    // Check ARIA labels on main sections
    await expect(page.locator('section[aria-label="Machine position readouts"]')).toBeVisible();
    await expect(page.locator('fieldset[aria-label="Axis selection"]')).toBeVisible();
    await expect(page.locator('fieldset[aria-label="Numeric keypad"]')).toBeVisible();
    await expect(page.locator('fieldset[aria-label="Mode toolbar"]')).toBeVisible();
    await expect(page.locator('fieldset[aria-label="Auxiliary function keys"]')).toBeVisible();
  });

  test('buttons are clickable and interactive', async ({ page }) => {
    // Test clicking various buttons to ensure they're interactive
    const numericButton = page.locator('fieldset.keypad button', { hasText: '5' });
    await expect(numericButton).toBeVisible();
    await numericButton.click();

    const axisButton = page.locator('fieldset.axis-panel').getByRole('button', { name: 'X', exact: true });
    await expect(axisButton).toBeVisible();
    await axisButton.click();

    const modeButton = page.locator('fieldset.bottom button', { hasText: 'abs/inc' });
    await expect(modeButton).toBeVisible();
    await modeButton.click();

    const functionButton = page.locator('fieldset.fkeys button', { hasText: 'F1' });
    await expect(functionButton).toBeVisible();
    await functionButton.click();
  });

  test('has correct page title and metadata', async ({ page }) => {
    await expect(page).toHaveTitle('EL400 DRO Simulator');
  });

  test('uses 7-segment font for display readouts', async ({ page }) => {
    // Wait for the page to fully load
    await page.waitForLoadState('networkidle');
    
    // Check that display outputs use the Seven Segment font
    const displayOutputs = page.locator('section.display output');
    await expect(displayOutputs).toHaveCount(3);
    
    // Verify font family is applied to each output
    for (let i = 0; i < 3; i++) {
      const output = displayOutputs.nth(i);
      await expect(output).toBeVisible();
      
      // Check computed style includes Seven Segment font
      const fontFamily = await output.evaluate((el) => {
        return window.getComputedStyle(el).fontFamily;
      });
      
      expect(fontFamily).toContain('Seven Segment');
    }
    
    // Test font loading by checking if font resources are available
    const fontLoadStatus = await page.evaluate(async () => {
      // Check if the font is loaded
      await document.fonts.ready;
      const sevenSegmentFont = [...document.fonts].find(font => 
        font.family === 'Seven Segment'
      );
      return sevenSegmentFont ? sevenSegmentFont.status : 'not-found';
    });
    
    expect(fontLoadStatus).toBe('loaded');
  });
});