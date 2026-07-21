import React from 'react';
import StructuredContent from '../components/StructuredContent.jsx';
import { testApmSimulatorTreeDocument } from '../content/trees/test-apm-simulator.js';

export default function PageTestApmSimulator() {
  return <StructuredContent document={testApmSimulatorTreeDocument} />;
}
