import { omit } from 'lodash';

import { addAction } from '@wordpress/hooks';

import { registerModule } from '@divi/module-library';

import { childModule } from './components/child-module';
import { d4Module } from './components/d4-module';
import { dynamicModule } from './components/dynamic-module';
import { parentModule } from './components/parent-module';
import { staticModule } from './components/static-module';
import { firstModule } from './components/first-module';
import {headingModule} from './components/heading-module';
import { AdvancedHeading } from './components/advanced-heading';


import './module-icons';

// Register modules.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'extensionExample', () => {
  registerModule(staticModule.metadata, omit(staticModule, 'metadata'));
  registerModule(dynamicModule.metadata, omit(dynamicModule, 'metadata'));
  registerModule(childModule.metadata, omit(childModule, 'metadata'));
  registerModule(parentModule.metadata, omit(parentModule, 'metadata'));
  registerModule(d4Module.metadata, omit(d4Module, 'metadata'));
  registerModule(firstModule.metadata, omit(firstModule, 'metadata'));
  registerModule(headingModule.metadata, omit(headingModule, 'metadata'));
  registerModule(AdvancedHeading.metadata, omit(AdvancedHeading, 'metadata'));
});
