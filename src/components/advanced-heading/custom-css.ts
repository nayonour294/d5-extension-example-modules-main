// WordPress dependencies.
import { __ } from '@wordpress/i18n';

import metadata from './module.json';


const customCssFields = metadata.customCssFields as Record<'contentContainer' | 'title1' | 'title2' | 'title3' , { subName: string, selectorSuffix: string, label: string }>;

customCssFields.contentContainer.label = __('Content Container', 'd5-extension-example-modules');
customCssFields.title1.label            = __('Title One', 'd5-extension-example-modules');
customCssFields.title2.label            = __('Title Two', 'd5-extension-example-modules');
customCssFields.title3.label            = __('Title Three', 'd5-extension-example-modules');

export const cssFields = { ...customCssFields };
