<?php

/**
 * @file
 * Lists available colors and color schemes for the Da_Vinci theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'top' => t('Header background top'),
    'bottom' => t('Header background bottom'),
    'titleslogan' => t('Title and slogan'),
    'bg' => t('Main background'),
    'text' => t('Text Color'),
    'link' => t('Link Color'),
    'textButtons' => t('Text Color Buttons'),
    'backButtons' => t('Buttons Background'),
    'footer' => t('Footer background'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Blue Lagoon (default)'),
      'colors' => [
        'top' => '#055a8e',
        'bottom' => '#1d84c3',
        'titleslogan' => '#000',
        'bg' => '#ffffff',
        'text' => '#747474',
        'textButtons' => '#fafafa',
        'backButtons' => '#ef3340',
        'footer' => '#1d84c0',
        'link' => '#0071B3',
      ],
    ],
    'firehouse' => [
      'title' => t('Firehouse'),
      'colors' => [
        'top' => '#cd2d2d',
        'bottom' => '#d64e4e',

      ],
    ],
  ],

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => [
    'css/colors.css',
  ],

  // Files to copy.
  'copy' => [
    'logo.svg',
  ],

  // Gradient definitions.
  'gradients' => [
    [
      // (x, y, width, height).
      'dimension' => [0, 0, 0, 0],
      // Direction of gradient ('vertical' or 'horizontal').
      'direction' => 'vertical',
      // Keys of colors to use for the gradient.
      'colors' => ['top', 'bottom'],
    ],
  ],

  // Preview files.
  'preview_library' => 'mytheme/color.preview',
  'preview_html' => 'color/preview.html',

  // Attachments.
  '#attached' => [
    'drupalSettings' => [
      'color' => [
        // Put the logo path into JavaScript for the live preview.
        'logo' => theme_get_setting('logo.url', 'da_vinci'),
      ],
    ],
  ],
];
