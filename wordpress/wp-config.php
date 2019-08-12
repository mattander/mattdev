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
define( 'DB_NAME', 'wordpress-db' );

/** MySQL database username */
define( 'DB_USER', 'matt' );

/** MySQL database password */
define( 'DB_PASSWORD', '1d3@2Kj' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '[{=N3fYc<dz(ciPFr1nx.I%[i+PR#+re6w^J[~a(hW_2Pp^vl1>2W6/MiKE)+H*i');
define('SECURE_AUTH_KEY',  'lw-mUK4T,G7&8hwZUCDo[)|hH0V,m=IW+NC=#du-8(l>B+ac=Z8<Vhv#4wlW)~`<');
define('LOGGED_IN_KEY',    'wv,Ne=7-.b =[a-r`w8W~Ab<HbJUn* 6?|O./tcYZXWHrFR-c-~9p+a2DEM*j+qy');
define('NONCE_KEY',        'cpDE%hd#9Iym;aQ`>8Lgg]cO>y~6]dB>n]@ASB*-[pOKc:Uw;yJK:~v]b8cmWqqh');
define('AUTH_SALT',        'Zi.Q-{,PU,Ln;gG|et1p#!@]hOKu-_vs:vegI6|V-PIe#;bJPR )Lkkiob:H,->u');
define('SECURE_AUTH_SALT', '?YzkM-t#gv_`BQCjdKGlC;iM0VHRGkRB<&#nq?(%g!eW7>zIlS3HkA5J{DjUknX>');
define('LOGGED_IN_SALT',   '<|0J;PJy|H3mm<0$(=-V?T);7@q5o u@[geUP@~s$>)%2D+[!)w+ww:!%5?mU`4G');
define('NONCE_SALT',       'o]oi/C!A+oG+ xb4`Az!Z0>CG7,sAQYeWX;-K7X9{`bH=q$?hMT%V;`Kpi-2*Dn|');

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
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
