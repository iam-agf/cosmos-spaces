import React from "react";

class IndexCalendar extends React.Component {
  render() {
    return (
          <div className="index-content-text">
            <div className="calendar">
              <div className="days">
                <div className="weekdays">
                  {/* <div>M</div>
                  <div>T</div>
                  <div>W</div>
                  <div>T</div>
                  <div>F</div>
                  <div>S</div>
                  <div>X</div> */}
                  <div>Mo</div>
                  <div>Tu</div>
                  <div>We</div>
                  <div>Th</div>
                  <div>Fr</div>
                  <div>Sa</div>
                  <div>Su</div>

                </div>
              </div>
              <div className="numbers">
                <div className="week">  
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                </div>  
                <div className="week">  
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                </div>  
                <div className="week">  
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
                  <div>21</div>
                </div>  
                <div className="week">  
                  <div>22</div>
                  <div>23</div>
                  <div>24</div>
                  <div>25</div>
                  <div>26</div>
                  <div>27</div>
                  <div>28</div>
                </div>  
                <div className="lastWeek">  
                  <div>29</div>
                  <div>30</div>
                  <div>31</div>
                  <div>  </div>
                  <div>  </div>
                  <div>  </div>
                  <div>  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }

}


export default IndexCalendar;