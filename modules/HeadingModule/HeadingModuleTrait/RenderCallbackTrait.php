<?php
/**
 * HeadingModule::render_callback()
 *
 * @package MEE\Modules\HeadingModule
 * @since ??
 */

namespace MEE\Modules\HeadingModule\HeadingModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Options\Element\ElementComponents;
use MEE\Modules\HeadingModule\HeadingModule;

trait RenderCallbackTrait {

	/**
	 * Static module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 * @param array          $attrs    Block attributes that were saved by VB.
	 * @param string         $content  Block content.
	 * @param WP_Block       $block    Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of Static module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {

		

		// Title.
		$title = $elements->render(
			[
				'attrName' => 'title',
			]
		);

		

		$parent       = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );
		$parent_attrs = $parent->attrs ?? [];

		return Module::render(
			[
				// FE only.
				'orderIndex'          => $block->parsed_block['orderIndex'],
				'storeInstance'       => $block->parsed_block['storeInstance'],

				// VB equivalent.
				'attrs'               => $attrs,
				'elements'            => $elements,
				'id'                  => $block->parsed_block['id'],
				'name'                => $block->block_type->name,
				'moduleCategory'      => $block->block_type->category,
				'classnamesFunction'  => [ HeadingModule::class, 'module_classnames' ],
				'stylesComponent'     => [ HeadingModule::class, 'module_styles' ],
				'scriptDataComponent' => [ HeadingModule::class, 'module_script_data' ],
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
				'children'            => [
					ElementComponents::component(
						[
							'attrs'         => $attrs['module']['decoration'] ?? [],
							'id'            => $block->parsed_block['id'],

							// FE only.
							'orderIndex'    => $block->parsed_block['orderIndex'],
							'storeInstance' => $block->parsed_block['storeInstance'],
						]
					),
					HTMLUtility::render(
						[
							'tag'               => 'div',
							'attributes'        => [
								'class' => 'example_heading_module__container',
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => $title,
						]
					),
				],
			]
		);
	}
}
