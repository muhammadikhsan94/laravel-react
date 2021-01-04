import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ComplaintShow extends Component {
	constructor() {
		super()
		this.state = {
			lapor: [],
			alert: null,
		}
	}

	componentDidMount() {
		axios.get(`/api/show`).then(response => {
			this.setState({
				lapor: response.data,
			})
		}).catch(err => {
			console.log(err);
		});
	}

	render() {
		const { lapor } = this.state
		return (
			<React.Fragment>
				<div className="page-content">
					<ul className="breadcrumb">
						<li><Link to="/"><span className="glyphicon glyphicon-home"></span></Link></li>
						<li className="active">Data Pengaduan</li>
					</ul>
							
					<div className="page-content-wrap">
						<div className="row">
							<form method="post">
								<div className="row">
									<div style={{ float: 'right', marginRight: '50px', marginBottom: '10px' }}>
										<div className="col-md-10">
											<input type="text" name="search" placeholder="Cari Data Berdasarkan Nama Jalan" className="form-control" />
										</div>
										<div className="col-md-2">
											<input type="submit" name="submit" value="search" className="btn btn-primary" />
										</div>
									</div>
								</div>
							</form>
						</div>

						<div className="col-lg-12">
							{lapor.map(lapor => (
								<div style={{ padding: '10px', border: '1px solid #999' }} className="media">
									<div className="media-left media-middle">
										<img
											style={{ width: '120px', height: '120px' }}
											className="media-object"
											src={window.location.origin + `/images/${lapor.foto[0].foto_jalan}`}
										/>
									</div>
									<div className="media-body">
										<p style={{ fontSize: '15px' }}>
											<b>Nama Pelapor :</b> {lapor.nama_pelapor}<br />
											<b>Tanggal Lapor :</b> {lapor.tanggal_lapor}<br />
											<b>Jalan Rusak :</b> {lapor.nama_jalan}<br />
											<b>Kategori Rusak :</b> {lapor.kategori.nama_kategori}
										</p>
										<div style={{ float: 'left' }}>
											<Link to={`/show/${lapor.id_lapor}`} className="btn btn-primary"> Detail <span className="glyphicon glyphicon-new-window"></span></Link>
										</div>
									</div>
								</div>
							))}
							{this.state.alert}
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default ComplaintShow