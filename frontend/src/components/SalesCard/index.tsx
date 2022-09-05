import './styles.css'
import NotificationButton from "../NotificationButton"
function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#120</td>
                            <td className="show576">01/08/2022</td>
                            <td>Ana</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#121</td>
                            <td className="show576">04/08/2022</td>
                            <td>Carlos</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 24300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#122</td>
                            <td className="show576">07/08/2022</td>
                            <td>Pedro</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 45500.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#123</td>
                            <td className="show576">10/08/2022</td>
                            <td>João</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 5600.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#124</td>
                            <td className="show576">20/08/2022</td>
                            <td>Chico</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 22700.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#125</td>
                            <td className="show576">25/08/2022</td>
                            <td>Gilberto</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 4500.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#126</td>
                            <td className="show576">01/09/2022</td>
                            <td>Maria</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 16300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#127</td>
                            <td className="show576">03/09/2022</td>
                            <td>Jussara</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 2300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#128</td>
                            <td className="show576">05/09/2022</td>
                            <td>Leandro</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 25300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#129</td>
                            <td className="show576">10/09/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 58300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#130</td>
                            <td className="show576">15/09/2022</td>
                            <td>Severino</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 16300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#131</td>
                            <td className="show576">20/09/2022</td>
                            <td>Pedro</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 4300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#132</td>
                            <td className="show576">21/09/2022</td>
                            <td>Paulo</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 15300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#133</td>
                            <td className="show576">25/09/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 7300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#134</td>
                            <td className="show576">27/09/2022</td>
                            <td>Leo</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 50300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#135</td>
                            <td className="show576">01/10/2022</td>
                            <td>Leonardo</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 5300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#136</td>
                            <td className="show576">05/10/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 7300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#137</td>
                            <td className="show576">07/10/2022</td>
                            <td>Pedro</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 5500.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard
