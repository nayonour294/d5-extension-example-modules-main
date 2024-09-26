<?php
/**
 * HeadingModule::custom_css().
 *
 * @package MEE\Modules\HeadingModule
 * @since ??
 */

namespace MEE\Modules\HeadingModule\HeadingModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

trait CustomCssTrait {

	/**
	 * Custom CSS fields
	 *
	 * This function is equivalent of JS const cssFields located in
	 * src/components/heading-module/custom-css.ts.
	 *
	 * A minor difference with the JS const cssFields, this function did not have `label` property on each array item.
	 *
	 * @since ??
	 */
	public static function custom_css() {
		return \WP_Block_Type_Registry::get_instance()->get_registered( 'example/heading-module' )->customCssFields;
	}

}
