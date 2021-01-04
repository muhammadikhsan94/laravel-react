import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ComplaintDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			detail: [],
			alert: null,
		}
	}

	componentDidMount() {
		const laporId = this.props.match.params.id_lapor

		axios.get(`/api/show/${laporId}`).then(response => {
			console.log(response.data)
			this.setState({
				detail: response.data,
			})
		}).catch(err => {
			console.log(err);
		});
	}

	render() {
		const { detail } = this.state
		return (
			detail.length == 0
			? 
			<React.Fragment>
				<div className="page-content">
					<ul className="breadcrumb">
						<li><Link to="/"><span className="glyphicon glyphicon-home"></span></Link></li>
						<li className="active">Data Pengaduan</li>
					</ul>

					<div className="page-content-wrap">
						<div className="row">
							<div style={{ textAlign: 'center' }}><img src={window.location.origin + `/icon/notfound.png`} /></div>
						</div>
					</div>
				</div>
			</React.Fragment>
			:
			<React.Fragment>
				<div className="page-content">
					<ul className="breadcrumb">
						<li><Link to="/"><span className="glyphicon glyphicon-home"></span></Link></li>
						<li className="active">Data Pengaduan</li>
					</ul>

					<div className="page-content-wrap">
						<div className="row">
							<div className="col-lg-12">
								<div className="panel panel-default">
									<div className="panel-heading" style={{ backgroundColor: '#1caf9a', color: 'white' }}>Data Lengkap Pengaduan Jalan Rusak</div>
									<div className="panel-body">
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Tanggal Lapor:</b></p>
											</div>
											<div className="col-md-9 bg">
												<p><b>{detail.tanggal_lapor}</b></p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Nama Pelapor:</b></p>
											</div>
											<div className="col-md-9 bg">
												<p><b>{detail.nama_pelapor}</b></p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Nomor Identitas:</b></p>
											</div>
											<div className="col-md-9 bg">
												<p><b>{detail.nik}</b></p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Alamat:</b></p>
											</div>
											<div className="col-md-9 bg">
												<p><b>{detail.alamat}</b></p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Nomor HP:</b></p>
											</div>
											<div className="col-md-9 bg">
												<p><b>{detail.no_hp}</b></p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Nama Jalan Rusak:</b></p>
											</div>
											<div className="col-md-9 bg">
												<p><b>{detail.nama_jalan}</b></p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Foto Jalan:</b></p>
											</div>
												<div className="col-md-9 bg">
													{detail.foto.map(foto => (
														<img style={{ height: '200px', marginBottom: '10px' }} className="media-object" src={window.location.origin + `/images/${foto.foto_jalan}`} alt="Foto Jalan Rusak" title="Foto Jalan Rusak" />
													))}
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Kategori Rusak</b></p>
											</div>
											<div className="col-md-9 bg">
												<p><b>{detail.kategori.nama_kategori}</b></p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Disposisi:</b></p>
											</div>
											<div className="col-md-9 bg">
												<p><b>{detail.detail_lapor.admin.name}</b></p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Status:</b></p>
											</div>
											<div className="col-md-9 bg">
												<p><b>{detail.detail_lapor.status.status}</b></p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3 bg">
												<p><b>Proses Perbaikan</b></p>
											</div>
											<div className="col-md-5 bg">
												<div className="progress">
														<div className="progress-bar" role="progressbar" aria-valuenow="{}" aria-valuemin="0" aria-valuemax="100" style={{ minWidth: '2em', width: `${detail.detail_lapor.proses_perbaikan}%` }}> {detail.detail_lapor.proses_perbaikan}% </div>
												</div>
											</div>
										</div>
									</div>
									{this.state.alert}
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default ComplaintDetail