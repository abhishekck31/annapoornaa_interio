#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of potentially unused Radix UI components based on common usage patterns
const potentiallyUnusedRadixComponents = [
  '@radix-ui/react-alert-dialog',
  '@radix-ui/react-aspect-ratio',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-collapsible',
  '@radix-ui/react-context-menu',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-hover-card',
  '@radix-ui/react-menubar',
  '@radix-ui/react-navigation-menu',
  '@radix-ui/react-popover',
  '@radix-ui/react-progress',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-separator',
  '@radix-ui/react-slider',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-toast',
  '@radix-ui/react-toggle',
  '@radix-ui/react-toggle-group',
  '@radix-ui/react-tooltip'
];

// Other potentially unused dependencies
const otherPotentiallyUnused = [
  'cmdk',
  'date-fns',
  'embla-carousel-react',
  'globby',
  'input-otp',
  'react-day-picker',
  'react-hook-form',
  'react-icons',
  'react-resizable-panels',
  'recharts',
  'sonner',
  'vaul',
  'zod'
];

console.log('🔍 Analyzing dependencies for potential optimization...\n');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const dependencies = packageJson.dependencies;

console.log('📦 Current dependencies count:', Object.keys(dependencies).length);
console.log('📊 Radix UI components:', Object.keys(dependencies).filter(dep => dep.startsWith('@radix-ui')).length);

console.log('\n🎯 Potentially unused Radix UI components:');
potentiallyUnusedRadixComponents.forEach(component => {
  if (dependencies[component]) {
    console.log(`  ❓ ${component}`);
  }
});

console.log('\n🎯 Other potentially unused dependencies:');
otherPotentiallyUnused.forEach(dep => {
  if (dependencies[dep]) {
    console.log(`  ❓ ${dep}`);
  }
});

console.log('\n💡 Recommendations:');
console.log('1. Run "npm run analyze" to see bundle analysis');
console.log('2. Search your codebase for imports of potentially unused components');
console.log('3. Remove unused dependencies to reduce bundle size');
console.log('4. Consider using dynamic imports for heavy components');

console.log('\n🔧 Quick optimization commands:');
console.log('npm run analyze  # Analyze bundle size');
console.log('npm audit fix    # Fix security vulnerabilities');
console.log('npm prune        # Remove unused dependencies');

// Generate a simple usage report
const componentsDir = path.join(__dirname, 'components');
const appDir = path.join(__dirname, 'app');

function findImports(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const imports = new Set();
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    files.forEach(file => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (extensions.some(ext => file.endsWith(ext))) {
        const content = fs.readFileSync(filePath, 'utf8');
        const importMatches = content.match(/import.*from\s+['"]([^'"]+)['"]/g);
        
        if (importMatches) {
          importMatches.forEach(match => {
            const module = match.match(/from\s+['"]([^'"]+)['"]/)?.[1];
            if (module) {
              imports.add(module);
            }
          });
        }
      }
    });
  }
  
  if (fs.existsSync(dir)) {
    scanDirectory(dir);
  }
  
  return imports;
}

const usedImports = findImports(componentsDir);
const appImports = findImports(appDir);
const allImports = new Set([...usedImports, ...appImports]);

console.log('\n📋 Actually used Radix UI components:');
potentiallyUnusedRadixComponents.forEach(component => {
  if (dependencies[component] && allImports.has(component)) {
    console.log(`  ✅ ${component} - USED`);
  } else if (dependencies[component]) {
    console.log(`  ❌ ${component} - POTENTIALLY UNUSED`);
  }
});

console.log('\n✨ Performance optimization complete!');
