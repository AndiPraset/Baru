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

//menambahkan data siswa
exports.tambahsiswa = function(req,res){
    var nama = req.body.nama;
    var kelas = req.body.kelas;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO siswa(nama,kelas,jurusan) VALUES(?,?,?)',
    [nama,kelas,jurusan],
        function (error,rows,fields){
            if (error){
                console.log(error);
            } else {
                res.json("Berhasil Menambahkan Data")
            }
        });
};

//mengubah data berdasarkan id
exports.ubahsiswa = function(req,res){
    var id = req.body.id_siswa;
    var nama = req.body.nama;
    var kelas = req.body.kelas;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE siswa Set nama=?, kelas=?, jurusan=? WHERE id_siswa=?',[nama,kelas,jurusan,id],
    function (error,rows,fields){
        if (error){
            console.log(error);
        } else {
            res.json("Berhasil Ubah Data")
        }
    });
};