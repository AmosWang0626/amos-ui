import React from 'react';
import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxTitle,
    MediaBoxDescription,
    Cell,
    CellBody,
    CellFooter,
    SearchBar,
    Footer,
    FooterText,
    Page
} from 'react-weui';
import { Link } from 'react-router-dom';

//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import '../style/App.css';

const CellMore = () => (
    <Cell access link>
        <CellBody>More</CellBody>
        <CellFooter />
    </Cell>
)

class List extends React.Component {
    state = {
        searchText: '',
        results: ['春天']
    }

    render() {
        return (
            <Page className="panel" title="Panel" subTitle="面板">
                <SearchBar
                    defaultValue={this.state.searchText}
                    placeholder="搜索"
                    lang={{
                        cancel: '取消'
                    }}
                />
                <Panel>
                    <PanelHeader>
                        <Link to="/article1">盼望着，盼望着，东风来了，春天的脚步近了。</Link>
                    </PanelHeader>
                    <PanelBody>
                        <MediaBox type="text">
                            <MediaBoxTitle><Link to="/article2">春江花月夜</Link></MediaBoxTitle>
                            <MediaBoxDescription>
                                春江潮水连海平，海上明月共潮生。
                                滟滟随波千万里，何处春江无月明！
                                江流宛转绕芳甸，月照花林皆似霰；
                                空里流霜不觉飞，汀上白沙看不见。
                                江天一色无纤尘，皎皎空中孤月轮。
                                江畔何人初见月？江月何年初照人？
                                人生代代无穷已，江月年年望相似。
                                不知江月待何人，但见长江送流水。
                                白云一片去悠悠，青枫浦上不胜愁。
                                谁家今夜扁舟子？何处相思明月楼？
                                可怜楼上月裴回，应照离人妆镜台。
                                玉户帘中卷不去，捣衣砧上拂还来。
                                此时相望不相闻，愿逐月华流照君。
                                鸿雁长飞光不度，鱼龙潜跃水成文。
                                昨夜闲潭梦落花，可怜春半不还家。
                                江水流春去欲尽，江潭落月复西斜。
                                斜月沉沉藏海雾，碣石潇湘无限路。
                                不知乘月几人归，落月摇情满江树。
                            </MediaBoxDescription>
                        </MediaBox>
                        <MediaBox type="text">
                            <MediaBoxTitle><Link to="/article3">村居</Link></MediaBoxTitle>
                            <MediaBoxDescription>
                                草长莺飞二月天，拂堤杨柳醉春烟。
                                儿童散学归来早，忙趁东风放纸鸢。
                            </MediaBoxDescription>
                        </MediaBox>
                        <MediaBox type="text">
                            <MediaBoxTitle><Link to="/article3">村居</Link></MediaBoxTitle>
                            <MediaBoxDescription>
                                草长莺飞二月天，拂堤杨柳醉春烟。
                                儿童散学归来早，忙趁东风放纸鸢。
                            </MediaBoxDescription>
                        </MediaBox>
                        <MediaBox type="text">
                            <MediaBoxTitle><Link to="/article3">村居</Link></MediaBoxTitle>
                            <MediaBoxDescription>
                                草长莺飞二月天，拂堤杨柳醉春烟。
                                儿童散学归来早，忙趁东风放纸鸢。
                            </MediaBoxDescription>
                        </MediaBox>
                        <MediaBox type="text">
                            <MediaBoxTitle><Link to="/article3">村居</Link></MediaBoxTitle>
                            <MediaBoxDescription>
                                草长莺飞二月天，拂堤杨柳醉春烟。
                                儿童散学归来早，忙趁东风放纸鸢。
                            </MediaBoxDescription>
                        </MediaBox>
                    </PanelBody>
                    <PanelFooter>
                        <CellMore />
                    </PanelFooter>
                </Panel>
                <Footer>
                    <FooterText>Copyright &copy; 2022-2023 amos.wang</FooterText>
                </Footer>
            </Page>
        );
    }
}

export default List;
