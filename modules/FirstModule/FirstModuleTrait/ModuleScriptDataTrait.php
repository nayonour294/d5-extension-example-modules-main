<?php
/**
 * FirstModule::module_script_data()
 *
 * @package MEE\Modules\FirstModule
 * @since ??
 */

namespace MEE\Modules\FirstModule\FirstModuleTrait;

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
						'selector'      => $selector . ' .example_first_module__title',
						'data'          => $attrs['title']['innerContent'] ?? [],
						'valueResolver' => function( $value ) {
							return $value ?? '';
						},
					],
					[
						'selector'      => $selector . ' .example_first_module__content',
						'data'          => $attrs['content']['innerContent'] ?? [],
						'valueResolver' => function( $value ) {
							return $value ?? '';
						},
						'sanitizer'     => 'et_core_esc_previously',
					],
					[
						'selector'      => $selector . ' .example_first_module__button',
						'data'          => $attrs['button']['innerContent'] ?? [],
						'valueResolver' => function( $value ) {
							return $value ?? '';
						},
						'tag'           => 'button',
						'sanitizer'     => 'et_core_esc_previously',
					]
				],
				'setAttrs'      => [
					[
						'selector'      => $selector . ' .example_first_module__image img',
						'data'          => [
							'src' => $attrs['image']['innerContent'] ?? [],
						],
						'valueResolver' => function( $value ) {
							return $value['src'] ?? '';
						},
						'tag'           => 'img',
					],
					
				],
				'setAttrs2'      => [
					[
						'selector'      => $selector . ' .example_first_module__image2 img',
						'data'          => [
							'src' => $attrs['image2']['innerContent'] ?? [],
						],
						'valueResolver' => function( $value ) {
							return $value['src'] ?? '';
						},
						'tag'           => 'img',
					],
				],
			],
		);
	}
}
