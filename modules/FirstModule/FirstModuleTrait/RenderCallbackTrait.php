<?php
/**
 * FirstModule::render_callback()
 *
 * @package MEE\Modules\FirstModule
 * @since ??
 */

namespace MEE\Modules\FirstModule\FirstModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Options\Element\ElementComponents;
use MEE\Modules\FirstModule\FirstModule;

trait RenderCallbackTrait {

	/**
	 * First module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 * @param array          $attrs    Block attributes that were saved by VB.
	 * @param string         $content  Block content.
	 * @param WP_Block       $block    Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of First module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		// Image.
		$image_src = $attrs['image']['innerContent']['desktop']['value']['src'] ?? '';
		$image_alt = $attrs['alt']['innerContent']['desktop']['value'];
		$image     = HTMLUtility::render(
			[
				'tag'                  => 'img',
				'attributes'           => [
					'src' => $image_src,
					'alt' => $image_alt,
				],
				'attributesSanitizers' => [
					'src' => function ( $value ) {
						$protocols = array_merge( wp_allowed_protocols(), [ 'data' ] ); // Need to add `data` protocol for default image.
						return esc_url( $value, $protocols );
					},
				],
			]
		);

		//Image 2
		$image2_src = $attrs['image2']['innerContent']['desktop']['value']['src'] ?? '';
		$image2_alt = $attrs['alt2']['innerContent']['desktop']['value'];
		$image2     = HTMLUtility::render(
			[
				'tag'                  => 'img',
				'attributes'           => [
					'src' => $image2_src,
					'alt' => $image2_alt,
				],
				'attributesSanitizers' => [
					'src' => function ( $value ) {
						$protocols = array_merge( wp_allowed_protocols(), [ 'data' ] ); // Need to add `data` protocol for default image.
						return esc_url($value, $protocols);
					},
				],
			]
		);

		//Image 2 container
		$image2_container = HTMLUtility::render(
			props: [
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_first_module__image2',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $image2,
			]
		);

		// Image container.
		$image_container = HTMLUtility::render(
			props: [
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_first_module__image',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $image,
			]
		);

		// Title.
		$title = $elements->render(
			[
				'attrName' => 'title',
			]
		);

		// Content.
		$content = $elements->render(
			[
				'attrName' => 'content',
			]
		);

		// Button
		$button = $elements->render(
			[
				'attrName' => 'button',
			]
		);

		// Button container.
		$button_container = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_first_module__button',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $button,
			]
		);

		// Content container.
		$content_container = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'example_first_module__content-container',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $title . $content . $button_container,
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
				'classnamesFunction'  => [ FirstModule::class, 'module_classnames' ],
				'stylesComponent'     => [ FirstModule::class, 'module_styles' ],
				'scriptDataComponent' => [ FirstModule::class, 'module_script_data' ],
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
								'class' => 'example_first_module__inner',
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => $image_container . $content_container . $image2_container,
						]
					),
				],
			]
		);
	}
}
