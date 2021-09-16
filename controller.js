'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    res.json("Aplikasi REST API ku berjalan!")
};

//menampilkan semua data siswa
exports.tampilsemuasiswa = function(req,res){
    connection.query('SELECT * FROM siswa', function (error,rows,fields){
        if(error){
            consoles.log(error);
        } else {
            response.ok(rows,res)
        }
    });
};

//meanmpilkan semua data siswa berdasarkan id
exports.tampilberdasarkanid=function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM siswa WHERE id_siswa = ?', [id],
        function(error,rows,fields){
            if (error){
                console.log(error);
            } else {
                response.ok(rows,res);
        }
    });
};