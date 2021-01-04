<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Aplikasi RoadGIS</title>

    <link rel="icon" href="{{asset('icon/dbm.png')}}" type="image/x-icon" />
	<!-- END META SECTION -->

	<!-- CSS INCLUDE -->        
	<link rel="stylesheet" type="text/css" id="theme" href="{{asset('css/theme-default.css')}}"/>
	<!-- END CSS INCLUDE -->      
</head>
<body>
	<div id="root"></div>
	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>