import "./Button.css";

import { EmbeddedIcon } from "../../icons";
import { SIZE, createEmbeddableAdapter, mergeClasses } from "../../shared";
import { any, bool, element, elementType, number, oneOf, oneOfType, string } from "prop-types";
import { embedBadge } from "../../badge";
import { forwardRef } from "react";
import { isNil } from "lodash";
import { useButton } from "./useButton";

const propTypes = {
    /**
     * Style to use.
     */
    variant: oneOf(["solid", "outline", "ghost", "link"]),
    /**
     * The color accent.
     */
    color: oneOf(["primary", "secondary", "danger"]),
    /**
     * [Icon](/?path=/docs/components-icon--default-story) component rendered before the text.
     */
    iconLeft: element,
    /**
     * [Icon](/?path=/docs/components-icon--default-story) component rendered after the text.
     */
    iconRight: element,
    /**
     * [Badge](/?path=/docs/components-badge--default-story) component rendered after the text.
     */
    badge: element,
    /**
     * Whether or not the button should autofocus on render.
     */
    autofocus: bool,
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay: number,
    /**
     * Whether or not the button take up the width of its container.
     */
    fluid: bool,
    /**
     * A button can have a circular form.
     */
    circular: bool,
    /**
     * A button can show a loading indicator.
     */
    loading: bool,
    /**
     * A button can vary in size.
     */
    size: oneOf(["mini", "tiny", "small", "medium", "large"]),
    /**
     * The button type.
     */
    type: oneOf(["button", "submit", "reset"]),
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * @ignore
     */
    children: any.isRequired
};

const defaultProps = {
    variant: "solid",
    type: "button",
    as: "button"
};

export function InnerButton({
    variant,
    color,
    iconLeft,
    iconRight,
    badge,
    autofocus,
    autofocusDelay,
    fluid,
    circular,
    loading,
    size,
    active,
    focus,
    hover,
    disabled,
    as: ElementType,
    className,
    children,
    forwardedRef,
    ...rest
}) {
    const buttonProps = useButton({
        variant,
        color,
        autofocus,
        autofocusDelay,
        fluid,
        circular,
        loading,
        size,
        active,
        focus,
        hover,
        disabled,
        className,
        forwardedRef,
        ...rest
    });

    const textMarkup = (
        <span className="text">{children}</span>
    );

    const iconLeftMarkup = !isNil(iconLeft) && (
        <EmbeddedIcon size={size}>{iconLeft}</EmbeddedIcon>
    );

    const iconRightMarkup = !isNil(iconRight) && (
        <EmbeddedIcon size={size}>{iconRight}</EmbeddedIcon>
    );

    const badgeMarkup = !isNil(badge) && embedBadge(badge, {
        size,
        disabled
    });

    const content = (
        <>
            {iconLeftMarkup}
            {textMarkup}
            {iconRightMarkup}{badgeMarkup}
        </>
    );

    return (
        <ElementType
            data-testid="button"
            {...buttonProps}
            className={mergeClasses(
                "o-ui button",
                iconLeftMarkup && "with-left-icon",
                iconRightMarkup && "with-right-icon",
                badgeMarkup && "with-badge",
                buttonProps.className
            )}
        >
            {content}
        </ElementType>
    );
}

InnerButton.propTypes = propTypes;
InnerButton.defaultProps = defaultProps;

export const Button = forwardRef((props, ref) => (
    <InnerButton { ...props } forwardedRef={ref} />
));

export const embedButton = createEmbeddableAdapter({
    [SIZE.small]: SIZE.mini,
    [SIZE.medium]: SIZE.tiny,
    [SIZE.large]: SIZE.small
});




