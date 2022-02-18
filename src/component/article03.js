import React from 'react';
import { Article, Page } from 'react-weui';

//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import '../style/App.css';

//asset
import article03 from '../asset/article03.png';

function Article3() {
  return (
    <div className="App">
      <Page className="article" title="Article" subTitle="文章">
        <Article>
          <h1>村居</h1>
          <h3>高鼎</h3>
          <section>
            <section>
              <p>
                <img src={article03} alt="" />
              </p>
              <p>草长莺飞二月天，拂堤杨柳醉春烟。</p>
              <p>儿童散学归来早，忙趁东风放纸鸢。</p>
            </section>
          </section>
        </Article>
      </Page>
    </div>
  );
}

export default Article3;
