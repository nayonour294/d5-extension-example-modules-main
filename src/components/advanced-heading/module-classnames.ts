import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { AdvancedHeadingAttrs } from './types';


/**
 * Module classnames function for Advanced Heading.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<AdvancedHeadingAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}: ModuleClassnamesParams<AdvancedHeadingAttrs>): void => {
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
