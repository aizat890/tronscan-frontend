import React from "react";
import { injectIntl, FormattedNumber ,FormattedDate,FormattedTime} from "react-intl";
import { withRouter } from "react-router";
import { widget } from "../../../../../lib/charting_library.min";
import Datafeed from "./udf/index.js";
import { connect } from "react-redux";
import { tu, tv } from "../../../../../utils/i18n";
import { TRXPrice } from "../../../../common/Price";
import { Client20 } from "../../../../../services/api";
import { change10lock, setWidget } from "../../../../../actions/exchange";
import { TokenTRC20Link } from "../../../../common/Links";
import { Icon,Modal } from "antd";

class Tokeninfo extends React.Component {
  constructor() {
    super();

    this.state = {
      tokeninfo: [],
      tokeninfoItem: {},
      detailShow: false,
      tvStatus: true
    };
  }

  componentDidMount() {
    const { tokeninfo } = this.state;
    const { selectData } = this.props;
    // const newObj = tokeninfo.filter(o => o.symbol == selectData.fShortName)[0];
    selectData && this.getTokenInfo();
    this.setState({ detailShow: false });
  }

  componentDidUpdate(prevProps) {
    const { tokeninfo } = this.state;
    const { selectData, activeLanguage } = this.props;

    if (
      selectData.exchange_id &&
      prevProps.selectData.id != selectData.exchange_id
    ) {
      this.getTokenInfo();
    }
    if (
      selectData.exchange_id != prevProps.selectData.exchange_id ||
      prevProps.activeLanguage != activeLanguage
    ) {
      // const newObj = tokeninfo.filter(
      //   o => o.symbol == selectData.fShortName
      // )[0];
      this.setState({ detailShow: false });
    }
  }

  getTokenInfo() {
    const { selectData } = this.props;
    // Client20.gettokenInfo20().then(({ trc20_tokens }) => {
    //   console.log(123, trc20_tokens);
    //   if (trc20_tokens) {
    //     const newObj = trc20_tokens.filter(
    //       o => o.name == selectData.first_token_id
    //     )[0];
    //     this.setState({ tokeninfoItem: newObj });
    //     this.setState({ tokeninfo: trc20_tokens });
    //   }
    // });
    // const { selectData } = this.props;
    // let newObj = {};

    if (selectData.fShortName == "TRX") {
      const newObj = {icon_url:"http://coin.top/production/js/20190506075825.png"}
      this.setState({ tokeninfoItem: newObj });
      return;
    }

    const fTokenAddr = selectData.fTokenAddr;
    if(!fTokenAddr){
      return
    }
    Client20.getTokenInfoItem(fTokenAddr, selectData.pairType).then(res => {
      const { trc20_tokens } = res;
      if (trc20_tokens) {
        const newObj = trc20_tokens[0];
        newObj["description"] = trc20_tokens[0].token_desc;
        newObj["totalSupply"] = trc20_tokens[0].total_supply_with_decimals;
        newObj["issued"] = trc20_tokens[0].total_supply_with_decimals;
        newObj["nrOfTokenHolders"] = '';
        newObj["startTime"] = trc20_tokens[0].issue_time;
        newObj["url"] = trc20_tokens[0].home_page;
        newObj["white_paper"] = trc20_tokens[0].white_paper;
        newObj["precision"] = trc20_tokens[0].decimals;
        this.setState({ tokeninfoItem: newObj });
      }

      const { data } = res;
      if (data) {
        const newObj = data[0];
        newObj["icon_url"] = data[0].imgUrl;
        this.setState({ tokeninfoItem: newObj });
      }
    });
  }

  render() {
    const { tokeninfoItem, detailShow, tvStatus } = this.state;
    const { selectData, widget } = this.props;
    let imgDefault = require("../../../../../images/logo_default.png");

    return (
      <div>
        {/* title 信息 */}
        <div className="d-flex exchange__kline__title position-relative">
          {tokeninfoItem && tokeninfoItem.icon_url ? (
            <img src={tokeninfoItem.icon_url}/>
          ) : (
            <img src={imgDefault}/>
          )}
          <div className="info-wrap">
            <div className="item">
              <p><span>{selectData.fShortName}</span>/{selectData.sShortName}</p>
              <p>
                <a href="javascript:;" onClick={() => this.setState({ detailShow: !detailShow })}>
                  <img src={require("../../../../../images/market/info.svg")}></img>
                  {selectData.fTokenName}
                </a>
              </p>
            </div>
            <div className="item">
              <p className={selectData.isUp ? 'col-green' : 'col-red'}>{selectData.price}</p>
              <p>≈ 4.53263</p>
            </div>
            <div className="item">
              <p>{tu("pairs_change")}</p>
              <p className={selectData.isUp ? 'col-green' : 'col-red'}>{selectData.up_down_percent}</p>
            </div>
            <div className="item">
              <p>{tu("H")}</p>
              <p>{selectData.high}</p>
            </div>
            <div className="item">
              <p>{tu("L")}</p>
              <p>{selectData.low}</p>
            </div>
            <div className="item">
              <p>{tu("24H_VOL")}</p>
              <p>{selectData.svolume}</p>
            </div>
            <div className="item">
              <p>{tu("24H_VOL")}</p>
              <p>{selectData.volume}</p>
            </div>
          </div>
        </div>

        
        {/* <div className="exchange__kline__pic" id='tv_chart_container'></div> */}
        <Modal
          visible={detailShow}
          onCancel={() => this.setState({ detailShow: !detailShow })}
          width={530}
          footer={null}
        >
          <div className="token-info-wrap">
            <h2>
            {tokeninfoItem && tokeninfoItem.icon_url ? (
              <img src={tokeninfoItem.icon_url}/>
            ) : (
              <img src={imgDefault}/>
            )}
            {selectData.fShortName}
            </h2>
            <p>{tokeninfoItem.description}</p>
            <hr/>
            <div className="info-list">
              <div>
                <span>{tu("trc20_token_info_Total_Supply")}</span>
                <span>
                {tokeninfoItem.totalSupply ? <FormattedNumber
                      value={
                        Number(tokeninfoItem.totalSupply) /
                        Math.pow(10, tokeninfoItem.precision || 0)
                      }
                    /> : '--'}
                </span>
              </div>
              <div>
                <span>{tu("trc20_top_IssuedAmount")}</span>
                <span>
                {tokeninfoItem.issued ? <FormattedNumber
                      value={
                        Number(tokeninfoItem.issued) /
                        Math.pow(10, tokeninfoItem.precision || 0)
                      }
                    /> : '--'}
                </span>
              </div>
              <div>
                <span>{tu("trc20_top_nrOfTokenHolders")}</span>
                <span>
                {tokeninfoItem.nrOfTokenHolders ?(<FormattedNumber
                      value={
                        Number(tokeninfoItem.nrOfTokenHolders)
                      }
                    />):'--'}
                </span>
              </div>
              <div>
                <span>{tu("trc20_top_CreateTime")}</span>
                <span>
                {tokeninfoItem.startTime?
                  (<span><FormattedDate 
                    value={tokeninfoItem.startTime}/> 
                    {' '}
                    <FormattedTime
                      value={tokeninfoItem.startTime}
                      hour='numeric'
                      minute="numeric"
                      second='numeric'
                      hour12={false}/>
                    </span>) : '--'
                }
                </span>
              </div>
              <div>
                <span>{tu("trc20_token_info_Website")}</span>
                <span>
                  {tokeninfoItem.url == 'no_message' || tokeninfoItem.url == '' ? '--' : <a href={tokeninfoItem.url} target="_blank">{tokeninfoItem.url}</a>}
                  {/* <a href={tokeninfoItem.url} target="_blank">{tokeninfoItem.url}</a> */}
                </span>
              </div>
              <div>
                <span>{tu("trc20_top_WhitePaper")}</span>
                <span>
                  {tokeninfoItem.white_paper == 'no_message' || tokeninfoItem.white_paper == '' ? '--' : <a href={tokeninfoItem.white_paper} target="_blank">{tokeninfoItem.white_paper}</a>}
                  </span>
              </div>
            </div>
            {selectData.fShortName != "TRX" && (<div className="info-more">
              <a href={selectData.pairType == 2 || selectData.pairType == 3 ? `https://tronscan.org/#/token20/${tokeninfoItem.contract_address}` : `https://tronscan.org/#/token/${tokeninfoItem.id}`} target="_blank">{tu('trc20_top_More')}></a>
            </div>)}
          </div>
        </Modal>
 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectData: state.exchange.data,
    selectStatus: state.exchange.status,
    activeLanguage: state.app.activeLanguage
  };
}

const mapDispatchToProps = {
  change10lock
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(injectIntl(Tokeninfo)));
