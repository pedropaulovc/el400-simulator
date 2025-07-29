import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for fonts to load and page to be fully rendered
    await page.waitForLoadState('networkidle');
    await page.waitForFunction(() => document.fonts.ready);
  });

  test('DRO Simulator - Full Component Screenshot', async ({ page }) => {
    // Take screenshot of the entire DRO simulator
    const droSimulator = page.locator('#dro');
    await expect(droSimulator).toBeVisible();
    
    // Take a full page screenshot for overall layout verification
    await expect(page).toHaveScreenshot('dro-simulator-full-page.png', {
      fullPage: true,
    });
    
    // Take a focused screenshot of just the DRO component
    await expect(droSimulator).toHaveScreenshot('dro-simulator-component.png');
  });

  test('DRO Display Section', async ({ page }) => {
    const display = page.locator('section.display');
    await expect(display).toBeVisible();
    
    // Screenshot of the 3-axis display with default values
    await expect(display).toHaveScreenshot('dro-display-default.png');
  });

  test('Axis Control Panel', async ({ page }) => {
    const axisPanel = page.locator('fieldset.axis-panel');
    await expect(axisPanel).toBeVisible();
    
    // Screenshot of axis selection buttons
    await expect(axisPanel).toHaveScreenshot('axis-control-panel.png');
  });

  test('Numeric Keypad', async ({ page }) => {
    const keypad = page.locator('fieldset.keypad');
    await expect(keypad).toBeVisible();
    
    // Screenshot of the numeric keypad layout
    await expect(keypad).toHaveScreenshot('numeric-keypad.png');
  });

  test('Bottom Toolbar', async ({ page }) => {
    const bottomToolbar = page.locator('fieldset.bottom');
    await expect(bottomToolbar).toBeVisible();
    
    // Screenshot of mode control buttons
    await expect(bottomToolbar).toHaveScreenshot('bottom-toolbar.png');
  });

  test('Function Keys', async ({ page }) => {
    const fkeys = page.locator('fieldset.fkeys');
    await expect(fkeys).toBeVisible();
    
    // Screenshot of auxiliary function keys
    await expect(fkeys).toHaveScreenshot('function-keys.png');
  });

  test('Power Button', async ({ page }) => {
    const powerBtn = page.locator('.power-btn');
    await expect(powerBtn).toBeVisible();
    
    // Screenshot of the power button
    await expect(powerBtn).toHaveScreenshot('power-button.png');
  });

  test('DRO with Different Display Values', async ({ page }) => {
    // Test with custom prop values (will need to be implemented when props work)
    const droWithCustomValues = page.locator('#dro');
    await expect(droWithCustomValues).toBeVisible();
    
    // For now, just capture the default state
    // TODO: When state management is implemented, test different display values
    await expect(droWithCustomValues).toHaveScreenshot('dro-custom-values.png');
  });

  test('Button Hover States', async ({ page }) => {
    const numericButton = page.locator('fieldset.keypad button', { hasText: '5' });
    await expect(numericButton).toBeVisible();
    
    // Hover over a button to test hover state
    await numericButton.hover();
    await expect(numericButton).toHaveScreenshot('button-hover-state.png');
  });

  test('Button Active States', async ({ page }) => {
    const numericButton = page.locator('fieldset.keypad button', { hasText: '7' });
    await expect(numericButton).toBeVisible();
    
    // Test active state by starting a click but not releasing
    await page.mouse.move(0, 0); // Reset mouse position
    const box = await numericButton.boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      
      // Take screenshot while button is pressed
      await expect(numericButton).toHaveScreenshot('button-active-state.png');
      
      await page.mouse.up();
    }
  });

  test('Cross-browser Visual Consistency', async ({ page, browserName }) => {
    // This test will run on both Chrome and Firefox
    const droSimulator = page.locator('#dro');
    await expect(droSimulator).toBeVisible();
    
    // Browser-specific screenshots for comparison
    await expect(droSimulator).toHaveScreenshot(`dro-simulator-${browserName}.png`);
  });

  test('Font Loading Verification', async ({ page }) => {
    const display = page.locator('section.display');
    await expect(display).toBeVisible();
    
    // Ensure Seven Segment font is loaded before taking screenshot
    await page.waitForFunction(() => {
      const testElement = document.querySelector('section.display output');
      if (!testElement) return false;
      
      const computedStyle = window.getComputedStyle(testElement);
      return computedStyle.fontFamily.includes('Seven Segment');
    });
    
    // Screenshot to verify font rendering
    await expect(display).toHaveScreenshot('seven-segment-font-rendering.png');
  });
});