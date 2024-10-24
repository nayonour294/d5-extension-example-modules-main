<?php

/**
 * AdvancedHeading::render_callback()
 *
 * @package MEE\Modules\AdvancedHeading
 * @since ??
 */

namespace MEE\Modules\AdvancedHeading\AdvancedHeadingTrait;

if (! defined('ABSPATH')) {
	die('Direct access forbidden.');
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Options\Element\ElementComponents;
use MEE\Modules\AdvancedHeading\AdvancedHeading;



trait RenderCallbackTrait
{



	/**
	 * Advanced Heading render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 * @param array          $attrs    Block attributes that were saved by VB.
	 * @param string         $content  Block content.
	 * @param WP_Block       $block    Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of Advanced Heading.
	 */


	public static function render_callback($attrs, $content, $block, $elements)
	{
		// Select all variables here.
		$containerDisplayType = $attrs['containerDisplayType']['innerContent']['desktop']['value'] ?? '';
		$containerDisplayDirection = $attrs['containerDisplayDirection']['innerContent']['desktop']['value'] ?? '';
		$containerAlignment = $attrs['containerAlignment']['innerContent']['desktop']['value'] ?? '';
		$containerAlignment2 = $attrs['containerAlignment2']['innerContent']['desktop']['value'] ?? '';
		$title1DisplayType = $attrs['title1DisplayType']['innerContent']['desktop']['value'] ?? '';
		$title2DisplayType = $attrs['title2DisplayType']['innerContent']['desktop']['value'] ?? '';
		$title3DisplayType = $attrs['title3DisplayType']['innerContent']['desktop']['value'] ?? '';

		$title3PositionType = $attrs['title3PositionType']['innerContent']['desktop']['value'] ?? '';

		$title3PositionTop = $attrs['title3PositionTop']['innerContent']['desktop']['value'] ?? '';

		//toggle variables
		$title3PositionSet = $attrs['title3PositionSet']['innerContent']['desktop']['value'] ?? '';

		//Container inline dynamic Style
		$ContainerStyle = "display:{$containerDisplayType}; flex-direction:{$containerDisplayDirection}; align-items:{$containerAlignment2}; justify-content:{$containerAlignment};";

		//Titles inline dynamic Style
		$TitleStyle1 = "display:{$title1DisplayType};";

		$TitleStyle2 = "display:{$title2DisplayType};";

		$TitleStyle3 = "display:{$title3DisplayType};";

		$TitleStyle3 = "display:{$title3DisplayType}; " . ( $title3PositionSet === 'on' ? "position:{$title3PositionType}; top:{$title3PositionTop};" : '' );

		





		// Title 1.
		$title1 = $elements->render(
			[
				'attrName' => 'title1',
				'attributes' => [
					'class' => 'advanced_heading__title1',
					'style'   => $TitleStyle1,
				],
				
			]
		);
		// Title 2.
		$title2 = $elements->render(
			[
				'attrName' => 'title2',
				'attributes' => [
					'class' => 'advanced_heading__title2',
					'style'   => $TitleStyle2,
				],

			]
		);
		// Title 3.
		$title3 = $elements->render(
			[
				'attrName' => 'title3',
				'attributes' => [
					'class' => 'advanced_heading__title3',
					'style'   => $TitleStyle3,
				],

			]
		);



		$parent       = BlockParserStore::get_parent($block->parsed_block['id'], $block->parsed_block['storeInstance']);
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
				'classnamesFunction'  => [AdvancedHeading::class, 'module_classnames'],
				'stylesComponent'     => [AdvancedHeading::class, 'module_styles'],
				'scriptDataComponent' => [AdvancedHeading::class, 'module_script_data'],
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
					// Content container.
					HTMLUtility::render(
						[
							'tag'               => 'div',
							'attributes'        => [
								'class' => 'advanced_heading__container',
								'style' => $ContainerStyle
							],
							'childrenSanitizer' => 'et_core_esc_previously',
							'children'          => $title1 . $title2 . $title3,
						]
					),
				],
			]
		);
	}
}
