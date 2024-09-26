<?php
/**
 * Module: Advanced Heading class.
 *
 * @package MEE\Modules\AdvancedHeading
 * @since ??
 */

namespace MEE\Modules\AdvancedHeading;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;


/**
 * `AdvancedHeading` is consisted of functions used for Advanced Heading such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class AdvancedHeading implements DependencyInterface {
	use AdvancedHeadingTrait\RenderCallbackTrait;
	use AdvancedHeadingTrait\ModuleClassnamesTrait;
	use AdvancedHeadingTrait\ModuleStylesTrait;
	use AdvancedHeadingTrait\ModuleScriptDataTrait;

	/**
	 * Loads `AdvancedHeading` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH . 'advanced-heading/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ AdvancedHeading::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
