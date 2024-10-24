<?php

/**
 * AdvancedHeading::module_styles().
 *
 * @package MEE\Modules\AdvancedHeading
 * @since ??
 */

namespace MEE\Modules\AdvancedHeading\AdvancedHeadingTrait;

if (! defined('ABSPATH')) {
	die('Direct access forbidden.');
}

use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Options\Text\TextStyle;
use ET\Builder\Packages\Module\Options\Css\CssStyle;
use MEE\Modules\AdvancedHeading\AdvancedHeading;

trait ModuleStylesTrait
{

	use CustomCssTrait;

	/**
	 * Advanced Heading's style components.
	 *
	 * This function is equivalent of JS function ModuleStyles located in
	 * src/components/advanced-heading/styles.tsx.
	 *
	 * @since ??
	 *
	 * @param array $args {
	 *     An array of arguments.
	 *
	 *      @type string $id                Module ID. In VB, the ID of module is UUIDV4. In FE, the ID is order index.
	 *      @type string $name              Module name.
	 *      @type string $attrs             Module attributes.
	 *      @type string $parentAttrs       Parent attrs.
	 *      @type string $orderClass        Selector class name.
	 *      @type string $parentOrderClass  Parent selector class name.
	 *      @type string $wrapperOrderClass Wrapper selector class name.
	 *      @type string $settings          Custom settings.
	 *      @type string $state             Attributes state.
	 *      @type string $mode              Style mode.
	 *      @type ModuleElements $elements  ModuleElements instance.
	 * }
	 */
	public static function module_styles($args)
	{
		$attrs    = $args['attrs'] ?? [];
		$elements = $args['elements'];
		$settings = $args['settings'] ?? [];

		Style::add(
			[
				'id'            => $args['id'],
				'name'          => $args['name'],
				'orderIndex'    => $args['orderIndex'],
				'storeInstance' => $args['storeInstance'],
				'styles'        => [
					// Module.
					$elements->style(
						[
							'attrName'   => 'module',
							'styleProps' => [
								'disabledOn' => [
									'disabledModuleVisibility' => $settings['disabledModuleVisibility'] ?? null,
								],
							],
						]
					),
					TextStyle::style(
						[
							'selector' => "{$args['orderClass']} .advanced_heading__container",
							'attr'     => $attrs['module']['advanced']['text'] ?? [],
						]
					),
					CssStyle::style(
						[
							'selector'  => $args['orderClass'],
							'attr'      => $attrs['css'] ?? [],
							'cssFields' => AdvancedHeading::custom_css(),
						]
					),

					// Container.
					$elements->style(
						[
							'attrName' => 'container',
						]
					),

					// Title 1.
					$elements->style(
						[
							'attrName' => 'title1',
						]
					),
					// Title 2.
					$elements->style(
						[
							'attrName' => 'title2',
						]
					),
					// Title 3.
					$elements->style(
						[
							'attrName' => 'title3',
						]
					),
				],
			]
		);
	}
}
