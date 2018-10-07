import React, { Component } from 'react';
import axios from 'axios';
import { API_BASE_PATH, CMS_BASE_PATH } from '../../app/layout/AppConstants';

class HomePage extends Component {
    state = {
        startPage: null,
        children: null
    };

    componentDidMount() {
        setTimeout(() => this.loadStartPage(), 1000);
    }

    loadStartPage() {
        axios.get(`${API_BASE_PATH}page/startpage`).then(res => {
            const startPage = res.data;
            this.setState({ startPage });

            this.loadChildren(startPage.pageId);
        });
    }

    loadChildren(pageId) {
        axios.get(`${API_BASE_PATH}page/${pageId}/children`).then(res => {
            const children = res.data;
            this.setState({ children });
        });
    }

    renderContent() {
        const { startPage } = this.state;

        if (startPage == null) {
            return <div className="loading">Loading content from server...</div>;
        }

        // Get page properties from the properties-collection, notice that property names always are lowercased
        const { heading, mainbody, topimage } = startPage.properties;

        return (
            <div className="cms">
                {topimage && <img src={CMS_BASE_PATH + topimage.imageUrl} alt={topimage.description} />}
                <h2>{heading && heading.value}</h2>
                {mainbody && <div dangerouslySetInnerHTML={{ __html: mainbody.value }} />}
            </div>
        );
    }

    renderChildren() {
        const { children } = this.state;

        if (children == null) {
            return <div className="loading">Loading content from server...</div>;
        }

        return (
            <div>
                {children.map(p => {
                    const { heading, mainbody } = p.properties;

                    return (
                        <div className="cms">
                            <h2>{heading && heading.value}</h2>
                            {mainbody && <div dangerouslySetInnerHTML={{ __html: mainbody.value }} />}
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                <h1>Headless demo using React</h1>
                <p>
                    Content below is fetched from <strong>Kaliko CMS</strong> using the content API. <i>(A one second delay has been added to the loader so that the
                    loading can be seen.)</i>
                </p>
                <div>{this.renderContent()}</div>
                <h2>Posts loaded from the CMS</h2>
                {this.renderChildren()}
            </div>
        );
    }
}

export default HomePage;
