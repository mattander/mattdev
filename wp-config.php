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
define('DB_NAME', 'pathfinderhealthnav');

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
define('AUTH_KEY', 'z`87.*fWla3i(&@o0UPh2$+;6Bn+FR680A%_`7}[tsl><Va!g{_Ysd&HC)GX4.Db');
define('SECURE_AUTH_KEY', 'L!m4V%=*<9;J2d,lZEa(Bce{]1[{6LZHe.toynCSv+A@W%)SFv:522u)vXdc,(_,');
define('LOGGED_IN_KEY', '^Su5hoxF23!u+SV=xGw1Ig%&ISx}~_1{!uh4Q~YoJ<+bA?BGns,Rh4,PDVws#Y:m');
define('NONCE_KEY', '`#*)n[TRY +Off_U`-.RB?!rKt,1)}6J5uK)Q8D.:e[(^(=TJ@%?jp@CWnKKU%6z');
define('AUTH_SALT', '0t?Rpj$mqNqTX8*[Y0Xsm[Y;&ca6SmJ5k)TtfS?@TKv>EupiZNL,v1:TxcU:dj8=');
define('SECURE_AUTH_SALT', 'SiBO7+.m=qFICz~$wUI68H4@-vs-E6<oGN> m@XuEIiC%5#$fI!.i+h&uasEW7T`');
define('LOGGED_IN_SALT', '^Xo:#!5lLF3Q}|n,|3_~# O=u4Q<Mve!D `avKrNwL0$,#<?U{pif*ybk28kFNW]');
define('NONCE_SALT', '.Zhbq?#l}+6M)u;^9z_wA3P7ug_j)~^HW]BDG!QKG85NW}Lo_%~f_7RsF5]7!ICm');

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
