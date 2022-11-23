import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../components/axios/axios";
import CoinChart from "../../components/coinChart/chart";
import "../coinDetail/coinDetail.css";
import Navbar from "../../components/navbar/navbar";
import DOMPurify from "dompurify";
import Footer from "../../components/footer/footer";
import {Link} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import SlideShow from "../../components/carousel-slideshow/slideshow";
import { Row } from "antd";
import Exchange_Market from "../../components/ex-list-details/ex-list-details";

const CoinDetail = () => {
  const { id } = useParams();
  var [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchCoinDetail = async () => {
      const response = await axios.post(
        "api/crypto/cryptoDetail",
        {
          cryptoId: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.data;

      if (response.status === 200) {
        setDetail(json);
        // console.log(json.cryptoDetails);
      }
    };
    fetchCoinDetail();
  }, []);
  

  return (
    <div>
    <div className="coin-detail">
      <Navbar />
      <div className="back-col">
                <Link to = '/market'><FaArrowLeft /> <span>Back</span></Link> 
                </div>
      <div className="top-info">

        <div className="left-det">
        <div className="d-left">
        <div className="d-name">
          <span>{id} ({detail && detail.cryptoDetails.symbol})</span>
            <span>${detail && detail.cryptoDetails.current_price_usd} USD</span>
            <span>Rank #{detail && detail.cryptoDetails.market_cap_rank}</span>
            <div className="table-detail">

<table>
    <tr>
        <th>Market Cap</th>
        <td>$ {detail && detail.cryptoDetails.market_cap_usd}</td>
    </tr>
    <tr>
        <th>24H Trading Valume</th>
        <td></td>
    </tr>
    <tr>
        <th>Fully Diluted Valuation</th>
        <td></td>
    </tr>
    <tr>
        <th>Circulating Supply</th>
        <td>$ {detail && detail.cryptoDetails.circulating_supply}</td>
    </tr>
    <tr>
        <th>Total Supply</th>
        <td>$ {detail && detail.cryptoDetails.total_supply}</td>
    </tr>
    <tr>
        <th>Max Supply</th>
        <td>$ {detail && detail.cryptoDetails.max_supply}</td>
    </tr>
</table>
</div>
       </div> </div>
        
<h1></h1>
        </div>
        <div className="right-col">
        <img src={detail && detail.cryptoDetails.image} width="350px" />



        </div>
        </div>











        {/* <Link to = '/market'><FaArrowLeft /> Back</Link>
        <p>Crypto</p>
        <p>
          Current Price USD :{" "}
          <span>{detail && detail.cryptoDetails.current_price_usd}</span>
        </p>
        <p>
          Markets : <span>test</span>
        </p>
        <p>
          Markets : <span>test</span>
        </p> */}
      </div>

      {/* second */}
      <div className="details-layout">


        <div className="coin-info-col1">
          <div className="wrap-out">
           
            <div className="first-row">
              <img src={detail && detail.cryptoDetails.image} width="150px" />
              <div className="first-row-2">
              <p>Rank #{detail && detail.cryptoDetails.market_cap_rank}</p>
              <p>{detail && detail.cryptoDetails.symbol}</p>
              </div>    
              </div>
            
            <h1 className="title-col">{id}</h1>
            <h1 className="price">
              ${detail && detail.cryptoDetails.current_price_usd} USD
            </h1>

            <div className="table-detail">

            <table>
                <tr>
                    <th>Market Cap</th>
                    <td>$ {detail && detail.cryptoDetails.market_cap_usd}</td>
                </tr>
                <tr>
                    <th>24H Trading Valume</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Fully Diluted Valuation</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Circulating Supply</th>
                    <td>$ {detail && detail.cryptoDetails.circulating_supply}</td>
                </tr>
                <tr>
                    <th>Total Supply</th>
                    <td>$ {detail && detail.cryptoDetails.total_supply}</td>
                </tr>
                <tr>
                    <th>Max Supply</th>
                    <td>$ {detail && detail.cryptoDetails.max_supply}</td>
                </tr>
            </table>
          </div>
        </div>


        {/* test */}
        {/* <div className="wrap-out-2">
        <ReplyForum key={row.postid} postId={row.postid}/>
        <h1>Exchange List</h1>
       <SlideShow exchange={detail && detail.cryptoDetails.exchange} />
       </div> */}
        {/* heree */}
        </div>

        <div className="coin-info-col2">    
        <div className="desc-col">
          <h1>About {id}</h1>
          <div
            className="para"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                detail && detail.cryptoDetails.description
              ),
            }}
          ></div>
          </div>

        </div>
      </div>
      <div className="chart-col">
          <CoinChart cryptoId={id} />
          </div>
            <h1 className="ex-h1"> EXCHANGE LIST</h1>
            <Exchange_Market exchange={detail && detail.cryptoDetails.exchange} />
      <Footer />
    </div>
  );
};

export default CoinDetail;