// WordPress dependencies.
import { __ } from '@wordpress/i18n';

import metadata from './module.json';


const customCssFields = metadata.customCssFields as Record<'contentContainer' | 'title' | 'content' | 'image' | 'button' | 'image2' | 'subTitle', { subName: string, selectorSuffix: string, label: string }>;

customCssFields.contentContainer.label = __('Content Container', 'd5-extension-example-modules');
customCssFields.title.label            = __('Title', 'd5-extension-example-modules');
customCssFields.content.label          = __('Content', 'd5-extension-example-modules');
customCssFields.image.label            = __('Image', 'd5-extension-example-modules');
customCssFields.button.label           = __('Button', 'd5-extension-example-modules');
customCssFields.image2.label           = __('Image 2', 'd5-extension-example-modules');
customCssFields.subTitle.label         = __('Subtitle', 'd5-extension-example-modules');

export const cssFields = { ...customCssFields };
