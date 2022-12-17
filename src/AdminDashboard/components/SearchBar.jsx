import React from 'react'

function SearchBar(props) {
  return (
    <div className="breadcome-area clients-breadcome-area servicee">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="breadcome-list single-page-breadcome">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="breadcome-heading">
                                    <form role="search" className="sr-input-func">
                                        <input style={{color: "#4ab2cc"}} type="text" placeholder="Chercher..." className="search-int col-xs-12 form-control mobile-menu-search" />
                                        <a href="#"><i className="fa fa-search"></i></a>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mobile-menu-links">
                                <ul className="breadcome-menu">
                                    <li><a style={{color: '#4ab2cc' }} href="admindashboard">Tableau de bord /</a></li>
                                    <li style={{color: 'gray' }}><span className="bread-blod">{props.location}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SearchBar
