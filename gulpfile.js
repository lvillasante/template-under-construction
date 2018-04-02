var gulp = require("gulp"),
		plumber = require("gulp-plumber"),
		concat = require ("gulp-concat"),
		cleancss = require("gulp-clean-css"),
		rename = require("gulp-rename"),
		notify = require("gulp-notify");

var onError = function(err){
	console.log("Se ha producido un error:", err.message);
	this.emit("end");
}

// Define paths variables
var dest_path =  'dist';

gulp.task("css-contact", function(){
	return gulp.src("./assets/**/*.css")	
		.pipe(plumber({errorHandler:onError}))
		.pipe(concat("seeker.css"))
		.pipe(gulp.dest("./css/"))
		.pipe(notify({message:"CSS contact task finalizada"}))
});	

gulp.task("css-min", function(){
	return gulp.src("./css/seeker.css")
		.pipe(plumber({errorHandler:onError}))
		.pipe(cleancss())
		.pipe(gulp.dest("./css/"))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest("./css/"))
		.pipe(notify({message:"CSS MIN task finalizada"}))
});

gulp.task("default", ["css-contact","css-min"], function(){
	
});	