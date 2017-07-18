<?php
/*
Plugin Name: WPUM Username Length
Plugin URI: https://wpusermanager.com/
Description: Set a minimum and maximum length for usernames upon registration.
Version: 1.0.0
Author: Alessandro Tesoro
Author URI: https://wpusermanager.com/
License:     GPLv2+
Text Domain: wpum-username-length
Domain Path: /languages
*/

/**
 * Copyright (c) 2016 Alessandro Tesoro
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2 or, at
 * your discretion, any later version, as published by the Free
 * Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Load textdomain.
 *
 * @return void
 */
function wpumul_load_plugin_textdomain() {
	load_plugin_textdomain( 'wpum-username-length', FALSE, basename( dirname( __FILE__ ) ) . '/languages/' );
}
add_action( 'plugins_loaded', 'wpumul_load_plugin_textdomain' );

/**
 * Add new options to settings panel.
 *
 * @param array $options
 * @return array
 */
function wpumul_add_options( $options ) {

  $new_settings = array(
		array(
			'id'      => 'wpumul_settings',
			'name'    => '<strong>' . esc_html__( 'Username Length Settings', 'wpum-username-length' ) . '</strong>',
			'type'    => 'header',
		),
		array(
			'id'      => 'username_min_length',
			'name'    => esc_html__( 'Minimum length', 'wpum-username-length' ),
			'desc'    => esc_html__( 'Set a minimum characters length for the username - leave blank if not needed.', 'wpum-username-length' ),
			'type'    => 'number',
		),
		array(
			'id'      => 'username_max_length',
			'name'    => esc_html__( 'Maximum length', 'wpum-username-length' ),
			'desc'    => esc_html__( 'Set a maximum characters length for the username.', 'wpum-username-length' ),
			'type'    => 'number',
		),
	);

	return array_merge( $options, $new_settings );

}
add_filter( 'wpum_settings_extensions', 'wpumul_add_options', 10 );

/**
 * Verify username length on registration.
 *
 * @param  bool $passed whether or not validation should fail.
 * @param  array $fields all form's fields.
 * @param  array $values submitted form's values.
 * @return mixed
 */
function wpumul_verify_username_length( $passed, $fields, $values ) {

	$username   = $values['register'][ 'username' ];
	$min_length = wpum_get_option( 'username_min_length' );
	$max_length = wpum_get_option( 'username_max_length' );

	$length = strlen( $username );

	// Check min length.
	if( ! empty( $min_length ) && $min_length !== '0' ) {
		if( $length < $min_length )
			return new WP_Error( 'username-short', sprintf( esc_html__( 'The username is too short, it must have at least %s characters.', 'wpum-username-length' ), $min_length ) );
	}

	// Check max length.
	if( ! empty( $max_length ) && $max_length !== '0' ) {
		if( $length > $max_length )
			return new WP_Error( 'username-long', sprintf( esc_html__( 'The username is too long. It cannot exceed %s characters.', 'wpum-username-length' ), $max_length ) );
	}

	return $passed;

}
add_filter( 'wpum/form/validate=register', 'wpumul_verify_username_length', 10, 3 );
