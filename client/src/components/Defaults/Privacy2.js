import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom';

function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div className="privacy-div">
            <h2>Privacy Policy</h2> <p>
            Android app's personal information handling policy.
                </p> <br/><p>
                1. Purpose of processing personal information. The app created by this developer processes personal information for the following purposes and is not used for purposes other than the following purposes.
                </p> <br/><p>
                1) Use for delegation of authority required by Admob, Unity Ads Advertising Library (Google Play Lib) in a free app.
                </p> <br/><p>
                2. Whether or not to entrust personal information processing.
                This developer's app does not entrust personal information processing to other companies.
                </p> <br/><p>
                3. The rights and obligations of the data subject and the method of exercising them.
                Users can exercise their personal information protection rights at any time as a personal information subject.
                However, this app does not collect and retain usage information of app users. It is used only for application functions.
                </p> <br/><p>
                4. Create items for personal information to be processed.
                We are processing the following personal information items.
                </p> <br/><p>
                1) It is used for Admob advertising.
                2) It is used for Unity Ads advertisement.
                </p> <p>
                5. Destruction of personal information.
                It does not collect and retain usage information of app users. Therefore, it does not have personal information that must be destroyed.
                </p> <br/><p>
                6. Measures to secure the safety of personal information.
                It does not collect and retain usage information of app users.
                </p> 
                <Link to='/' className="intro-list-go-back-link">
                    <div style={{textAlign:"center"}}
                        className="go-to-back-btn"
                        >← 메인으로 돌아가기</div>
                </Link>
        </div>
    )
}

export default withRouter(Privacy)
