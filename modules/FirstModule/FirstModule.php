<?php
/**
 * Module: First Module class.
 *
 * @package MEE\Modules\FirstModule
 * @since ??
 */

namespace MEE\Modules\FirstModule;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;


/**
 * `FirstModule` is consisted of functions used for First Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class FirstModule implements DependencyInterface {
	use FirstModuleTrait\RenderCallbackTrait;
	use FirstModuleTrait\ModuleClassnamesTrait;
	use FirstModuleTrait\ModuleStylesTrait;
	use FirstModuleTrait\ModuleScriptDataTrait;

	/**
	 * Loads `FirstModule` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = D5_EXTENSION_EXAMPLE_MODULES_JSON_PATH . 'first-module/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ FirstModule::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
