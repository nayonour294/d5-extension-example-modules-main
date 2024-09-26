<?php
/**
 * AdvancedHeading::module_script_data()
 *
 * @package MEE\Modules\AdvancedHeading
 * @since ??
 */

namespace MEE\Modules\AdvancedHeading\AdvancedHeadingTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Layout\Components\MultiView\MultiViewScriptData;
use ET\Builder\Packages\Module\Options\Element\ElementScriptData;

trait ModuleScriptDataTrait {

	/**
	 * Set script data of used module options.
	 *
	 * @since ??
	 *
	 * @param array $args {
	 *   Array of arguments.
	 *
	 *   @type string $id       Module id.
	 *   @type string $selector Module selector.
	 *   @type array  $attrs    Module attributes.
	 * }
	 */
	public static function module_script_data( $args ) {
		// Assign variables.
		$id             = $args['id'] ?? '';
		$name           = $args['name'] ?? '';
		$selector       = $args['selector'] ?? '';
		$attrs          = $args['attrs'] ?? [];
		$store_instance = $args['storeInstance'] ?? null;

		// Module decoration attributes.
		$module_decoration_attrs = $attrs['module']['decoration'] ?? [];

		// Element Script Data Options.
		ElementScriptData::set(
			[
				'id'            => $id,
				'selector'      => $selector,
				'attrs'         => array_merge(
					$module_decoration_attrs,
					[
						'link' => $args['attrs']['module']['advanced']['link'] ?? [],
					]
				),
				'storeInstance' => $store_instance,
			]
		);

		MultiViewScriptData::set(
			[
				'id'            => $id,
				'name'          => $name,
				'hoverSelector' => $selector,
				'setContent'    => [
					[
						'selector'      => $selector . ' .advanced_heading__title1',
						'data'          => $attrs['title1']['innerContent'] ?? [],
						'valueResolver' => function( $value ) {
							return $value ?? '';
						},
					],
				],
				'setContent2'    => [
					[
						'selector'      => $selector . ' .advanced_heading__title2',
						'data'          => $attrs['title2']['innerContent'] ?? [],
						'valueResolver' => function( $value ) {
							return $value ?? '';
						},
					],
				],
				'setContent3'    => [
					[
						'selector'      => $selector . ' .advanced_heading__title3',
						'data'          => $attrs['title3']['innerContent'] ?? [],
						'valueResolver' => function( $value ) {
							return $value ?? '';
						},
					],
				],
			]
			
		);
	}
}
