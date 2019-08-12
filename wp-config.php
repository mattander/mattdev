<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'mattdev-wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '1d3@2Kj');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'N|B<4A+3xaD+O+A>L1h3&wbl--9A?A97vItDkS&_A7+W^x-)7aSjGjzz1*_,#Me=');
define('SECURE_AUTH_KEY',  '5kS hW16a-$-z4?nB&&!Z-EI:j=&a:u(eGsBo{-4FUy]{ u6+<Z]sgqbX@;hHYCf');
define('LOGGED_IN_KEY',    'e>j)yJ+`-JPxnZ$!Tr1$M[iMix/BduS%O%B3d!|HuE|i|DG>*9r|W#y9NTFIbM#`');
define('NONCE_KEY',        'If(y 8FW-J8m,OkqDP#kn3%1+,UjUXkJx6F  HETI)H0!1e`?|:U-b]oFMk%4Qeg');
define('AUTH_SALT',        'o#%S72`-N(jr|X=CKN#&.Cuk3/?+>D]f+Gamu-n!Sn[VxhQ$;eWCutj&|&874NLa');
define('SECURE_AUTH_SALT', 'gh:fI{Sa:E~9UeWq,2-T8_bsuP]dv]-|o/i/VKZst[1y:v=Q16z5u}{zy!?XAa5l');
define('LOGGED_IN_SALT',   '>o_ !YRG=|Fq],G^|p1-7D]]0Xi[Xg$yx7.;W$3=JPBhxm$$H7<9j)bC{ukt/^|H');
define('NONCE_SALT',       'baXDxO24U<YQA@SDg7<(LX7[bPii&Ja,Pnpdj-Pfe|ejv63-lgUXb<0_,zW7N>sb');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

//Added the FS_METHOD to fix local wordpress updates
define('FS_METHOD', 'direct');

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH'))
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
