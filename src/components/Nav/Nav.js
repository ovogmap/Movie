import React from "react";
import { Ul, Li, Navbar, Inner } from "./NavStyle";
import { Link, useHistory } from "react-router-dom";
export default({ init }) => {
  const history = useHistory();
  return (
    <Navbar>
      <Inner>
        <div>
          <Link to="/" onClick={()=>{history.push("/")}}>
            <h1>
              movie<span>on</span>
            </h1>
          </Link>
        </div>
        <nav>
          <Ul>
            <Li>
              <Link to="/search" >검색</Link>
            </Li>
            <Li>
              <Link to="/list">영화리스트</Link>
            </Li>
            {init && (
              <Li>
                <Link to="/like">좋아요리스트</Link>
              </Li>
            )}
            <Li>
              {init ? (
                <Link to="/profile" className="pointbox">
                  프로필
                </Link>
              ) : (
                <Link to="/auth" className="pointbox">
                  로그인
                </Link>
              )}
            </Li>
          </Ul>
        </nav>
      </Inner>
    </Navbar>
  );
};