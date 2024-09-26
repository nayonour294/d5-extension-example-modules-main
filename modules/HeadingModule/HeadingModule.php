<?php
/**
 * Module: Heading Module class.
 *
 * @package MEE\Modules\HeadingModule
 * @since ??
 */

namespace MEE\Modules\HeadingModule;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;


/**
 * `HeadingModule` is consisted of functions used for Heading Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class HeadingModule implements DependencyInterface {
	use HeadingModuleTrait\RenderCallbackTrait;
	use HeadingModuleTrait\ModuleClassnamesTrait;
	use HeadingModuleTrait\ModuleStylesTrait;
	use HeadingModuleTrait\ModuleScriptDataTrait;

	/**
	 * Loads `HeadingModule` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH . 'heading-module/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ HeadingModule::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
