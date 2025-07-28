import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

// Mock the CSS import
vi.mock('./DROSimulator.css', () => ({}))

import { DROSimulator } from './DROSimulator'

describe('DROSimulator', () => {
  it('renders with default values of 0.000 for all axes', () => {
    render(<DROSimulator />)
    
    const outputs = screen.getAllByRole('status')
    
    expect(outputs[0]).toHaveTextContent('0.000') // X axis
    expect(outputs[1]).toHaveTextContent('0.000') // Y axis
    expect(outputs[2]).toHaveTextContent('0.000') // Z axis
  })

  it('displays custom values with 3 decimal places', () => {
    const { container } = render(<DROSimulator xValue={123.456} yValue={789.123} zValue={45.67} />)
    
    const xOutput = container.querySelector('output[name="x"]')
    const yOutput = container.querySelector('output[name="y"]')
    const zOutput = container.querySelector('output[name="z"]')
    
    expect(xOutput).toHaveTextContent('123.456')
    expect(yOutput).toHaveTextContent('789.123')
    expect(zOutput).toHaveTextContent('45.670')
  })

  it('formats integer values with 3 decimal places', () => {
    const { container } = render(<DROSimulator xValue={100} yValue={50} zValue={25} />)
    
    const xOutput = container.querySelector('output[name="x"]')
    const yOutput = container.querySelector('output[name="y"]')
    const zOutput = container.querySelector('output[name="z"]')
    
    expect(xOutput).toHaveTextContent('100.000')
    expect(yOutput).toHaveTextContent('50.000')
    expect(zOutput).toHaveTextContent('25.000')
  })

  it('handles negative values correctly', () => {
    const { container } = render(<DROSimulator xValue={-123.456} yValue={-0.001} zValue={-999.999} />)
    
    const xOutput = container.querySelector('output[name="x"]')
    const yOutput = container.querySelector('output[name="y"]')
    const zOutput = container.querySelector('output[name="z"]')
    
    expect(xOutput).toHaveTextContent('-123.456')
    expect(yOutput).toHaveTextContent('-0.001')
    expect(zOutput).toHaveTextContent('-999.999')
  })

  it('rounds values to 3 decimal places', () => {
    const { container } = render(<DROSimulator xValue={123.456789} yValue={0.0001} zValue={99.9999} />)
    
    const xOutput = container.querySelector('output[name="x"]')
    const yOutput = container.querySelector('output[name="y"]')
    const zOutput = container.querySelector('output[name="z"]')
    
    expect(xOutput).toHaveTextContent('123.457')
    expect(yOutput).toHaveTextContent('0.000')
    expect(zOutput).toHaveTextContent('100.000')
  })
})