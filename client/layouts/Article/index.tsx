import React, { useEffect, useState } from 'react'
import { Container } from 'components/Container'
import Layout from 'components/Layout'
import { Progress } from 'antd'

export const Article = () => {
  const [scroll, setScroll] = useState(0)


  const meta = {
    canonical: 'https://javascriptseo.io/privacy/',
  }

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = (scrollPx / winHeightPx) * 100

    setScroll(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollProgress)
    return () => {
      window.removeEventListener('scroll', scrollProgress)
    }
  }, [scrollProgress])

  return (
    <Layout title="Privacy Policy - JavaScriptSEO.io" canonical={meta.canonical}>
      <Container className="art-progress">
        <Progress
          showInfo={false}
          strokeColor="#fff"
          trailColor="#243342"
          percent={scroll}
        />
      </Container>
      <Container className="article__container">
        <h1 className="text-center">Privacy Notice</h1>
        <h1 className="text-center">JavaScriptSEO.io Chrome Extension</h1>
        <div className="d-flex justify-content-center mb-34 pb-24">
          <time>Jan 16, 2021</time>
          <p className="article__readtime mb-0">1 min read</p>
        </div>
        <div className="article__body">
          <div>
            <span>
              <span>
                <span>Thank you for choosing to be part of our community at Javascriptseo.io<span><span></span></span> ("<span><span></span></span><strong>Company</strong></span><span><span><span><span><span></span></span></span></span></span><span>", "<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at admin@javascriptseo.io.
              </span>
              </span>
            </span>
          </div>
          <div>
            <span>
              <br></br>
            </span>
          </div>
          <div>
            <span>
              <span>
                <span>When you <span>
                  <span></span>
                </span>visit our website <a href="https://javascriptseo.io/" target="_blank">https://javascriptseo.io/ </a>
              (the "<strong>Website</strong>"), <span>
                    <span>
                    </span>
                  </span>use our mobile application, <span>
                    <span>
                    </span>
                  </span>as the case may be (the "<strong>App</strong>")
              <span>
                    <span>
                    </span></span> and more generally, use any of our services (the "<strong>Services</strong>", which include the&nbsp;</span>
                <span><span><span><span>
                  <span></span>Website<span>
                    <span>
                    </span></span> and </span></span></span><span><span><span>App<span></span></span></span></span></span><span>), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
                </span>
              </span>
            </span>
          </div>
          <div>
            <span>
              <br></br>
            </span>
          </div>
          <div>
            <span>
              <span>
                <span>
                  <span>
                    This privacy notice applies to all information collected through our Services (which, as described above, includes our&nbsp;</span>
                  <span>
                    <span>
                      <span>
                      </span>
                      Website<span>
                        <span>
                        </span>
                      </span>
                         and </span>
                    <span>App<span>
                      <span><span></span></span></span></span></span>
                  <span>), as well as, any related services, sales, marketing or events.</span>
                </span>
              </span>
            </span>
          </div>
          <div>
            <span>
              <br></br>
            </span>
          </div>
          <div>
            <span>
              <span>
                <span>
                  <span>
                    <strong>Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</strong>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div>
            <span>
              <br></br>
            </span>
          </div>
          <div>
            <span>
              <span>
                <span>
                  <strong>
                    <span>TABLE OF CONTENTS</span>
                  </strong>
                </span>
              </span>
            </span>
          </div>
          <div>
            <span>
              <br></br>
            </span>
          </div>
          <div>
            <span>
              <a href="#infocollect">
                <span>1. WHAT INFORMATION DO WE COLLECT?</span>
              </a>
              <span>
                <span>
                  <span>
                    <span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div>
            <span>
              <a href="#infouse">
                <span>2. HOW DO WE USE YOUR INFORMATION?</span>
              </a>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                      </span></span></span></span></span></span>
          </div>
          <div>
            <span>
              <span>
                <a href="#infoshare">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></span>
              <span><span><span><span></span></span></span></span></span>
          </div>
          <div>
            <span>
              <a href="#cookies">
                <span>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></a>
              <span>
                <span>
                  <span>
                    <span><span></span></span></span></span></span></span>
          </div>
          <div>
            <span>
              <a href="#inforetain">
                <span>5. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a>
              <span><span><span>
                <span>
                  <span></span></span></span></span></span></span>
          </div>
          <div>
            <span>
              <a href="#infosafe">
                <span>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a>
              <span>
                <span>
                  <span>
                    <span></span></span></span></span></span>
          </div>
          <div>
            <span>
              <a href="#infominors">
                <span>7. DO WE COLLECT INFORMATION FROM MINORS?</span></a>
              <span>
                <span>
                  <span>
                    <span></span></span></span></span></span>
          </div>
          <div>
            <span>
              <span>
                <a href="#privacyrights">8. WHAT ARE YOUR PRIVACY RIGHTS?</a></span></span>
          </div>
          <div>
            <span>
              <a href="#DNT">
                <span>9. CONTROLS FOR DO-NOT-TRACK FEATURES</span></a></span>
          </div>
          <div>
            <span>
              <a href="#caresidents">
                <span>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span>
          </div>
          <div>
            <span>
              <a href="#policyupdates">
                <span>11. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span>
          </div>
          <div>
            <a href="#contact">
              <span>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a>
          </div>
          <div>
            <a href="#request">
              <span>13. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</span></a>
          </div>
          <div>
            <span>
              <br></br>
            </span>
          </div>
          <div id="infocollect">
            <span>
              <span><span><span><span id="control"><strong><span>1. WHAT INFORMATION DO WE COLLECT?</span></strong><span></span></span></span></span></span></span>
          </div>
          <div>
            <span>
              <span>
                <strong><u><br></br></u>
                </strong><strong>Personal information you disclose to us</strong></span></span>
          </div>
          <div><div><br></br></div><div><span><span><span><span><span><span><strong><em>In Short:&nbsp;</em></strong></span></span></span></span><span><span><span><span><strong><em>&nbsp;</em></strong><em>We collect personal information that you provide to us.</em></span></span></span></span></span></span></div>
          </div>
          <div>
            <span>
              <br></br>
            </span>
          </div>
          <div>
            <span>
              <span>
                <span>We collect personal information that you voluntarily provide to us when you
                <span>
                  </span></span><span>express an interest in obtaining information about us or our products and Services, when you participate in activities on the
                    <span>Services</span></span></span><span>&nbsp;or otherwise when you contact us.</span></span>
          </div>
          <div>
            <span>
              <br></br>
            </span>
          </div>
          <div>
            <span>
              <span>
                <span>
                  The personal information that we collect depends on the context of your interactions with us and the <span><span>Services</span>, the choices you make and the products and features you use. The personal information we collect may include the following:
                </span></span></span></span>
          </div>
          <div>
            <span>
              <br></br>
            </span>
          </div>
          <div>
            <span>
              <span>
                <span>
                  <strong>Personal Information Provided by You. </strong>
                We collect <span><span>email addresses;&nbsp;</span><span> and other similar information.</span><span></span></span></span></span>
            </span>
          </div>
          <div>
            <span>
              <br></br>
            </span>
          </div>
          <div>
            <span>
              <span>
                <span>
                  All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.<span></span></span></span></span>
          </div>
          <div>
            <span>
              <span><strong><u><br></br></u></strong><strong>Information automatically collected</strong>
              </span></span>
          </div>
          <div>
            <div><br></br></div>
            <div>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <strong><em>In Short:&nbsp;</em></strong>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span>
                    <span><span><span><strong><em>&nbsp;</em></strong><em>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our
                    <span><em><span><span><span> Services </span></span></span></em></span>.</em></span></span></span></span></span></span>
            </div>
            <div>
              <br></br>
            </div>
            <div>
              <span>
                <span>
                  <span>We automatically collect certain information when you visit, use or navigate the
                  <span>
                      <span>
                        Services </span></span>. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our
                      <span><span> Services </span></span> and other technical information. This information is primarily needed to maintain the security and operation of our <span><span>Services </span></span>, and for our internal analytics and reporting purposes.</span>
                </span>
              </span>
            </div>
          </div>
          <div>
            <br></br>
          </div>
          <div>
            <span>
              <span>
                <span>Like many businesses, we also collect information through cookies and similar technologies.
                <span></span>
                </span>
              </span>
            </span>
          </div>
          <div>
            <br>
            </br>
          </div>
          <div>
            <span>
              <span>
                <span>The information we collect includes:</span>
              </span>
            </span>
          </div>
          <ul>
            <li>
              <span>
                <span>
                  <span><em>Log and Usage Data. </em>
                  Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our
                  <span>
                      <span>
                        <span >
                          <span>
                            <span >
                              Services </span></span></span></span></span>
                            and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the
                            <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              Services </span></span></span></span>&nbsp;</span>
                                      (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).
                                      <span><span>
                      <span>
                        <span>
                          <span>
                          </span></span></span></span></span></span></span></span>
            </li>
          </ul>
          <div>
            <br></br>
          </div>
          <ul>
            <li>
              <span>
                <span>
                  <span>
                    <em>Device Data. </em>
             We collect device data such as information about your computer, phone, tablet or other device you use to access the
             <span>
                      <span>
                        Services </span></span>.
                 Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system configuration information.
                 <span>
                      <span>
                        <span>
                          <span>
                            <span>
                            </span></span></span></span></span></span></span></span>
            </li>
          </ul>
          <div>
            <br></br>
          </div>
          <ul>
            <li>
              <span>
                <span>
                  <span>
                    <em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the <span >
                      <span>
                        <span >
                          <span >
                            <span>
                              Services </span></span></span></span></span>.
                              For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.
                              <span>
                      <span>
                        <span >
                          <span>
                            <span></span></span></span></span></span></span></span></span>
            </li>
          </ul>
          <div>
            <br></br>
          </div>
          <div>
            <span>
              <span>
                <strong><u><br></br></u></strong>
              </span>
              <strong>Information collected through our App</strong>
            </span>
          </div>
          <div>
            <div>
              <br></br>
            </div>
            <div>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <strong><em>In Short:&nbsp;</em></strong><em>We collect information regarding your <span>
                            mobile device, </span> when you use our App.</em></span></span></span></span>
                </span>
              </span>
            </div>
            <div>
              <br></br>
            </div>
            <div>
              <span>
                <span>
                  <span>
                    If you use our App, we also collect the following information:
            </span>
                </span>
              </span>
              <div>
                <span></span>
                <div>
                  <span></span>
                </div>
                <ul>
                  <li>
                    <span>
                      <span>
                        <span>
                          <em>Mobile Device Data.&nbsp;</em>
            We automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our App, we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID and information about the features of our App you accessed.
            <span>
                            <span>
                              <span>
                                <span>
                                  <span>
                                  </span></span></span></span></span></span></span></span></li></ul>
                <div>
                  <span>
                  </span>
                  <div>
                    <span>
                    </span>
                    <span></span>
                    <div>
                      <span>
                        <span>
                          <span>
                            This information is primarily needed to maintain the security and operation of our App, for troubleshooting and for our internal analytics and reporting purposes.
            <span>
                              <span>
                                <span>
                                  <span>
                                  </span></span></span></span>
                            <span>
                              <span>
                                <span>
                                  <span>
                                  </span></span></span></span></span></span>
                      </span>
                    </div>
                    <div>
                      <br></br>
                    </div>
                    <div>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <strong><span>2. HOW DO WE USE YOUR INFORMATION?</span></strong>
                              </span>
                            </span></span></span></span>
                    </div>
                    <div>
                      <div><br></br>
                      </div>
                      <div>
                        <span>
                          <span>
                            <span>
                              <span>
                                <span>
                                  <span>
                                    <strong><em>In Short: &nbsp;</em></strong><em>
                                      We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em></span></span></span></span></span></span></div>
                    </div>
                    <div><br></br></div>
                    <div>
                      <span>
                        <span>
                          <span>
                            We use personal information collected via our
            <span><span>
                              Services </span></span> for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</span></span></span></div>
                    <div><br></br></div>
                    <div>
                      <span>
                        <span>
                          <span>
                            We use the information we collect or receive:
            </span></span></span>
                      <div>
                        <span>
                          <span><span>
                          </span></span></span>
                        <div>
                          <span>
                            <span>
                              <span>
                              </span></span></span>
                          <div>
                            <span>
                              <span>
                                <span>
                                </span></span></span>
                            <div>
                              <span><span><span></span></span></span>
                              <div>
                                <div>
                                  <div>
                                    <div>
                                      <p></p><p></p><p>
                                      </p>
                                      <p>
                                      </p>
                                      <div>
                                        <span></span></div>
                                      <ul>
                                        <li>
                                          <span>
                                            <span>
                                              <span>
                                                <strong>To send you marketing and promotional communications.</strong>
            We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our
            <span><span><span><span><span><span> Services </span></span></span></span></span></span>, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "<a href="#privacyrights"><span>
                                                  <span>WHAT ARE YOUR PRIVACY RIGHTS</span></span></a>" below).<span><span><span>
                                                    <span>
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <span>
                                                              <span>
                                                              </span></span></span></span></span></span></span></span></span></span></span></span>
                                        </li>
                                      </ul>
                                      <div>
                                        <span>
                                        </span></div>
                                      <ul>
                                        <li><span><span><span><strong>Deliver targeted advertising to you.</strong></span>
                                          <span>&nbsp;We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.<span><span></span></span>
                                          </span></span></span>
                                        </li></ul>
                                      <div>
                                        <span>
                                        </span>
                                        <div>
                                          <span>
                                          </span>
                                          <span></span></div>
                                        <div><br></br>
                                        </div>
                                        <div id="infoshare">
                                          <span>
                                            <span>
                                              <span>
                                                <span>
                                                  <span id="control">
                                                    <strong>
                                                      <span>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</span></strong></span></span></span></span></span>
                                        </div>
                                        <div><br></br>
                                        </div>
                                        <div><span><span><span><strong><em>In Short:</em></strong><em>&nbsp; We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</em></span></span></span>
                                        </div>
                                        <div><br></br></div>
                                        <div>
                                          <span><span><span>We may process or share your data that we hold based on the following legal basis:</span></span></span></div>
                                        <ul>
                                          <li>
                                            <span>
                                              <span>
                                                <span>
                                                  <strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.
            <span><span>
                                                    <span>
                                                    </span></span></span></span></span></span></li></ul>
                                        <div>
                                          <span>
                                            <span>
                                              <span>
                                                <span>
                                                  <span>
                                                    <span>
                                                      <span>
                                                        <span>
                                                          <span>
                                                          </span></span></span></span></span></span></span></span></span></div>
                                        <ul>
                                          <li>
                                            <span><span><span><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.
            <span>
                                                <span>
                                                  <span>
                                                    <span>
                                                      <span>
                                                        <span>
                                                        </span></span></span></span></span></span></span></span></span></li></ul>
                                        <div>
                                          <span>
                                            <span>
                                              <span><span><span><span>
                                              </span></span></span></span></span></span></div>
                                        <ul>
                                          <li>
                                            <span>
                                              <span>
                                                <span><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
            <span>
                                                    <span>
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <span>
                                                            </span></span></span></span></span></span></span></span></span>
                                          </li></ul>
                                        <div>
                                          <span>
                                            <span><span><span><span><span>
                                            </span></span></span></span></span></span>
                                        </div>
                                        <ul>
                                          <li>
                                            <span>
                                              <span>
                                                <span>
                                                  <strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
            <span>
                                                    <span>
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <span>
                                                            </span></span></span></span></span></span></span></span></span>
                                          </li></ul>
                                        <div>
                                          <span>
                                            <span>
                                              <span>
                                                <span>
                                                  <span>
                                                    <span>
                                                    </span></span></span></span></span></span></div>
                                        <ul>
                                          <li>
                                            <span>
                                              <span>
                                                <span>
                                                  <strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
            <span>
                                                    <span>
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <span>
                                                            </span></span></span></span></span></span></span></span></span>
                                          </li></ul>
                                        <div>
                                          <span>
                                            <span><span>More specifically, we may need to process your data or share your personal information in the following situations:</span></span></span></div>
                                        <ul>
                                          <li><span><span><span><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></span></span></li></ul>
                                        <div>
                                          <span><span><span></span></span></span>
                                          <div>
                                            <span>
                                              <span>
                                                <span></span></span></span>
                                            <div>
                                              <span>
                                                <span>
                                                  <span>
                                                    <span>
                                                      <span>
                                                      </span></span></span></span></span>
                                              <div>
                                                <span>
                                                  <span>
                                                    <span>
                                                    </span></span></span>
                                                <div>
                                                  <span>
                                                    <span>
                                                      <span>
                                                      </span></span></span>
                                                  <div>
                                                    <span>
                                                      <span>
                                                        <span>
                                                          <span>
                                                          </span><span>
                                                            <span>
                                                            </span>
                                                          </span></span></span></span>
                                                    <span>
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <span>
                                                              <span>
                                                                <span>
                                                                </span></span></span></span></span></span></span>
                                                    <div>
                                                      <span>
                                                      </span>
                                                    </div>
                                                    <div>
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <span>
                                                              <span>
                                                                <span>
                                                                </span>
                                                              </span></span></span></span></span></div>
                                                    <div><br></br>
                                                    </div>
                                                    <div id="cookies">
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <span>
                                                              <span id="control">
                                                                <strong><span>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></strong></span></span></span></span></span></div>
                                                    <div><br></br>
                                                    </div>
                                                    <div><span>
                                                      <span>
                                                        <span>
                                                          <strong><em>In Short:&nbsp;</em></strong><em>&nbsp;We may use cookies and other tracking technologies to collect and store your information.</em></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div>
                                                      <span>
                                                        <span>
                                                          <span>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice
            <span><span></span><span><span><span><span><span><span></span>
                                                              <span>
                                                              </span>
                                                              <span>
                                                                <span>
                                                                  <span>
                                                                    <span>
                                                                      <span>
                                                                        <span>
                                                                          <span>
                                                                            <span>
                                                                              <span>
                                                                                <span>
                                                                                  <span>
                                                                                  </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div id="inforetain">
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <span>
                                                              <span id="control">
                                                                <strong><span>5. HOW LONG DO WE KEEP YOUR INFORMATION?</span></strong></span></span></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div>
                                                      <span>
                                                        <span>
                                                          <span><strong><em>In Short:&nbsp;</em></strong><em>&nbsp;We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div>
                                                      <span>
                                                        <span>
                                                          <span>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than
            <span><span><span> 90 days </span></span></span>.</span></span></span></div>
                                                    <div><br></br>
                                                    </div>
                                                    <div>
                                                      <span>
                                                        <span>
                                                          <span>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
            <span></span></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div id="infosafe">
                                                      <span>
                                                        <span><span>
                                                          <span>
                                                            <span id="control"><strong><span>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></strong></span></span></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div>
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <strong><em>In Short:&nbsp;</em></strong><em>&nbsp;We aim to protect your personal information through a system of organizational and technical security measures.</em></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div>
                                                      <span>
                                                        <span>
                                                          <span>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
                                                          However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.
                                                          Although we will do our best to protect your personal information, transmission of personal information to and from our
             <span>
                                                              <span>
                                                                <span>
                                                                  <span>
                                                                    <span>
                                                                      <span>
                                                                        <span>
                                                                          <span>
                                                                            Services </span></span></span></span></span></span></span></span> is at your own risk. You should only access the
             <span>
                                                              <span>
                                                                <span>
                                                                  <span>
                                                                    <span>
                                                                      <span>
                                                                        <span>
                                                                          <span>
                                                                            Services </span></span></span></span></span></span></span></span> within a secure environment.
             <span>
                                                            </span>
                                                            <span>
                                                              <span>
                                                              </span></span></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div id="infominors">
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <span>
                                                              <span id="control">
                                                                <strong>
                                                                  <span>7. DO WE COLLECT INFORMATION FROM MINORS?</span></strong></span></span></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div>
                                                      <span>
                                                        <span>
                                                          <span><strong><em>In Short:</em></strong><em>&nbsp; We do not knowingly collect data from or market to children under 18 years of age.</em></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div><span><span><span>We do not knowingly solicit data from or market to children under 18 years of age. By using the
               <span><span><span><span><span><span><span><span> Services </span></span></span></span></span></span></span></span>, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the
               <span><span><span><span><span><span><span><span> Services </span></span></span></span></span></span></span></span>. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at
               <span><span>
                                                        __________ </span></span>.<span>
                                                        <span>
                                                          <span></span></span></span></span></span></span></div>
                                                    <div><br></br></div>
                                                    <div id="privacyrights"><span><span><span><span><span id="control"><strong><span>8. WHAT ARE YOUR PRIVACY RIGHTS?</span></strong></span></span></span></span></span></div>
                                                    <div><br></br></div><div><span><span><span><strong><em>In Short:</em></strong><em>&nbsp;
                <span><span><span><em></em></span></span></span>You may review, change, or terminate your account at any time.</em>
                                                      <span><span></span></span></span></span></span></div>
                                                    <div><span>&nbsp;</span></div><div><span><span><span>If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:
                  <span><span><span><span><span><a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank"><span> http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm </span></a></span></span></span></span></span>.</span></span></span></div>
                                                    <div><br></br></div><div><span><span><span>If you are a resident in Switzerland, the contact details for the data protection authorities are available here:
                    <span><span><span><span><span><span><a href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">https://www.edoeb.admin.ch/edoeb/en/home.html</a></span></span></span></span></span></span>.</span></span></span></div></div>
                                                  <div><br></br></div><div><span><span><span><strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our
                    <span><span><span><span><span><span><span><span><span><span><span> Services </span></span></span></span></span></span></span></span></span></span></span>. To opt-out of interest-based advertising by advertisers on our
                    <span><span><span><span><span><span><span><span><span><span><span> Services </span></span></span></span></span></span></span></span></span></span></span> visit <span><span><a href="http://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank"><span>http://www.aboutads.info/choices/</span></a></span></span>. <span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span>
                                                      <span></span></span></span></span></span></span></div>
                                                  <div><br></br></div><div id="DNT"><span><span><span><span><span id="control"><strong>
                                                    <span>9. CONTROLS FOR DO-NOT-TRACK FEATURES</span></strong></span></span></span></span></span></div>
                                                  <div><br></br></div><div><span><span><span>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</span></span>&nbsp;</span></div>
                                                  <div><br></br></div><div id="caresidents"><span><span><span><span><span id="control"><strong><span>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></strong></span></span></span></span></span></div>
                                                  <div><br></br></div>
                                                  <div><span><span><span><strong><em>In Short:&nbsp;</em></strong><em>&nbsp;Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em></span></span></span></div>
                                                  <div><br></br></div>
                                                  <div>
                                                    <span>
                                                      <span>
                                                        <span>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</span></span></span></div>
                                                  <div><br></br></div>
                                                  <div>
                                                    <span><span><span>If you are under 18 years of age, reside in California, and have a registered account with
                       <span><span><span><span><span><span><span> a Service </span></span></span></span></span></span></span>, you have the right to request removal of unwanted data that you publicly post on the
                       <span><span><span><span><span><span><span> Services </span></span></span></span></span></span></span>. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the
                       <span><span><span><span><span><span><span> Services </span></span></span></span></span></span></span>, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
                       <span><span></span></span></span></span></span></div>
                                                  <div>
                                                    <span><span><strong><u><br></br></u></strong><strong>CCPA Privacy Notice</strong></span></span></div>
                                                  <div><div><br></br></div>
                                                    <div><span><span><span><span><span><span>The California Code of Regulations defines a "resident" as:</span></span></span></span></span></span></div></div>
                                                  <div><br></br></div><div><span><span><span>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</span></span></span></div><div><span><span>
                                                    <span>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</span></span></span></div><div><br></br></div>
                                                  <div><span><span><span>All other individuals are defined as "non-residents."</span></span></span></div>
                                                  <div><br></br></div><div><span><span><span>If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</span></span></span></div>
                                                  <div><br></br></div><div><span><span><span><strong>What categories of personal information do we collect?</strong></span></span></span></div>
                                                  <div><br></br></div><div><span><span><span>We have collected the following categories of personal information in the past twelve (12) months:<span><span>
                                                  </span></span></span></span></span></div>
                                                  <div><br></br></div>
                                                  <table className = 'tableCss'>
                                                    <tbody>
                                                      <tr>
                                                        <td><br></br><span><span><span><strong>Category</strong></span></span></span><br></br><br></br></td><td><br></br>
                                                          <span><span><span><strong>Examples</strong></span></span></span><br></br><br></br></td>
                                                        <td><br></br><span><span><span><strong>Collected</strong></span></span></span><br></br><br></br></td></tr>
                                                      <tr>
                                                        <td>
                                                          <div>
                                                            <span>
                                                              <span>
                                                                <span>A. Identifiers</span></span></span></div>
                                                        </td>
                                                        <td><div><span><span><span>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name</span></span></span></div></td>
                                                        <td><div><br></br></div>
                                                          <div><span>
                                                            <span><span> NO </span></span></span></div>
                                                          <div><br></br></div></td></tr>
                                                      <tr>
                                                        <td><div><span><span><span>B. Personal information categories listed in the California Customer Records statute</span></span></span></div></td>
                                                        <td>
                                                          <div>
                                                            <span><span>
                                                              <span>Name, contact information, education, employment, employment history and financial information</span></span></span></div></td>
                                                        <td>
                                                          <div><br></br></div>
                                                          <div><span>
                                                            <span><span>YES</span></span></span></div>
                                                          <div><br></br></div></td></tr>
                                                      <tr><td><div><span><span><span>C. Protected classification characteristics under California or federal law</span></span></span></div></td>
                                                        <td><div><span><span><span>Gender and date of birth</span></span></span></div></td>
                                                        <td><div><br></br></div><div>
                                                          <span>
                                                            <span><span>NO</span></span></span></div>
                                                          <div><br></br></div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td><div><span><span><span>D. Commercial information</span></span></span></div></td>
                                                        <td><div><span><span><span>Transaction information, purchase history, financial details and payment information</span></span></span></div></td>
                                                        <td><div><br></br></div>
                                                          <div><span><span><span>NO</span></span></span></div>
                                                          <div><br></br></div></td></tr>
                                                      <tr>
                                                        <td><div><span><span><span>E. Biometric information</span></span></span></div></td>
                                                        <td><div><span><span><span>Fingerprints and voiceprints</span></span></span></div></td>
                                                        <td><div><br></br></div>
                                                          <div><span><span><span>NO</span></span></span></div>
                                                          <div><br></br></div></td></tr>
                                                      <tr>
                                                        <td>
                                                          <div>
                                                            <span><span><span>F. Internet or other similar network activity</span></span></span></div></td>
                                                        <td><div><span><span><span>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements</span></span></span></div></td>
                                                        <td><div><br></br></div><div><span><span><span>NO</span></span></span></div>
                                                          <div>
                                                            <span>
                                                              <span>
                                                                <span><br></br></span></span></span></div></td></tr>
                                                      <tr>
                                                        <td><div><span><span><span>G. Geolocation data</span></span></span></div></td>
                                                        <td><div><span><span><span>Device location</span></span></span></div></td>
                                                        <td><div><br></br></div>
                                                          <div><span><span><span>NO</span></span></span></div>
                                                          <div><br></br></div></td></tr><tr>
                                                        <td><div><span><span><span>H. Audio, electronic, visual, thermal, olfactory, or similar information</span></span></span></div></td>
                                                        <td><div><span><span><span>Images and audio, video or call recordings created in connection with our business activities</span></span></span></div></td>
                                                        <td><div><br></br></div><div><span><span><span>NO</span></span></span></div></td></tr>
                                                      <tr>
                                                        <td><div><span><span><span>I. Professional or employment-related information</span></span></span></div></td>
                                                        <td><div><span><span><span>Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us</span></span></span></div></td>
                                                        <td><div><br></br></div><div><span><span><span>NO</span></span></span></div></td></tr>
                                                      <tr>
                                                        <td><div><span><span><span>J. Education Information</span></span></span></div></td>
                                                        <td><div><span><span><span>Student records and directory information</span></span></span></div></td>
                                                        <td><div><br></br></div><div><span>
                                                          <span>
                                                            <span>NO</span></span></span></div></td></tr>
                                                      <tr>
                                                        <td><div><span><span><span>K. Inferences drawn from other personal information</span></span></span></div></td>
                                                        <td><div><span><span><span>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</span></span></span></div></td>
                                                        <td><div><br></br></div><div><span><span><span>NO<span></span>
                                                        </span></span></span></div></td></tr>
                                                    </tbody>
                                                  </table>
                                                  <div></div><div><br></br></div><div><span><span><span>We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:
              <span><span><span><span><span></span></span></span></span></span></span></span></span></div><ul>
                                                    <li><span><span><span>Receiving help through our customer support channels;</span></span>
                                                      <span><span><span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>
                                                  <div>
                                                    <span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></div><ul><li>
                                                      <span><span><span>Participation in customer surveys or contests; and</span></span><span>
                                                        <span><span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>
                                                  <div>
                                                    <span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></div>
                                                  <ul>
                                                    <li><span><span><span>Facilitation in the delivery of our Services and to respond to your inquiries.</span></span>
                                                      <span><span><span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>
                                                  <div><span><span><span><strong>How do we use and share your personal information?</strong></span></span></span></div>
                                                  <div><br></br></div><div><span><span><span><span><span></span></span></span></span></span>
                                                    <div>
                                                      <span><span></span></span>
                                                      <div><span><span><span>More information about our data collection and sharing practices can be found in this privacy notice
                              <span><span><span><span></span></span></span></span>.<span>
                                                          <span><span><span></span></span></span></span></span></span></span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span>You may contact us <span><span> by email at admin@javascriptseo.io,</span><span><span></span></span></span></span></span></span>
                                                        <span> or by referring to the contact details at the bottom of this document.</span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span>If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</span></span></span></div>
                                                      <div><br></br></div><div><span><span><span><strong>Will your information be shared with anyone else?</strong></span></span></span></div><div><br></br></div>
                                                      <div><span><span><span>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.<span><span></span></span></span></span></span></div>
                                                      <div><br></br>
                                                      </div>
                                                      <div><span><span><span>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal data.
               <span><span></span></span></span></span></span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span> Javascriptseo.io </span><span>&nbsp;has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding 12 months.
                 <span><span><span> Javascriptseo.io </span></span></span> will not sell personal information in the future belonging to website visitors, users and other consumers.
                 <span><span><span><span><span><span>
                                                        </span></span></span></span>
                                                        </span></span></span></span></span>
                                                        <span>
                                                          <span>
                                                          </span></span><span><span><span></span></span></span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span><strong>Your rights with respect to your personal data</strong></span></span></span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span><u>Right to request deletion of the data - Request to delete</u></span></span></span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.</span></span></span></div>
                                                      <div><br></br></div><div><span><span><span><u>Right to be informed - Request to know</u></span></span></span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span>Depending on the circumstances, you have a right to know:
                         <span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div>
                                                      <ul>
                                                        <li><span><span><span>whether we collect and use your personal information;
                             <span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></li></ul>
                                                      <div>
                                                        <span><span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div>
                                                      <ul>
                                                        <li><span><span><span>the categories of personal information that we collect;<span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></li></ul>
                                                      <div><span><span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div>
                                                      <ul>
                                                        <li><span><span><span>the purposes for which the collected personal information is used;<span><span><span>
                                                          <span><span><span></span></span></span></span></span></span></span></span></span></li></ul>
                                                      <div><span><span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div>
                                                      <ul>
                                                        <li><span><span><span>whether we sell your personal information to third parties;<span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></li></ul>
                                                      <div>
                                                        <span><span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div>
                                                      <ul><li><span><span><span>the categories of personal information that we sold or disclosed for a business purpose;<span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></li></ul>
                                                      <div><span><span>
                                                        <span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div><ul><li><span><span><span>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and<span><span>
                                                          <span><span><span><span></span></span></span></span></span></span></span></span></span></li></ul><div><span>
                                                            <span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div><ul>
                                                        <li><span><span><span>the business or commercial purpose for collecting or selling personal information.
                                <span><span><span><span><span><span>
                                                          </span></span></span></span></span></span></span></span></span></li></ul>
                                                      <div><span><span><span>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</span></span></span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span><u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u></span></span></span></div>
                                                      <div><br></br></div>
                                                      <div>
                                                        <span><span><span>We will not discriminate against you if you exercise your privacy rights.</span></span></span></div>
                                                      <div><br></br></div><div><span><span><span><u>Verification process</u></span></span></span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</span></span></span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. If, however, we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</span></span></span></div>
                                                      <div><br></br></div><div><span><span><span><u>Other privacy rights</u></span></span></span></div><div>
                                                        <span><span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div>
                                                      <ul>
                                                        <li><span><span><span>you may object to the processing of your personal data
                                          <span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>
                                                      <div><span><span><span><span><span>
                                                        <span>
                                                          <span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div>
                                                      <ul>
                                                        <li><span><span><span>you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data
                                                  <span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>
                                                      <div>
                                                        <span><span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div>
                                                      <ul><li><span><span><span>you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.<span><span><span><span><span><span><span><span>
                                                        <span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>
                                                      <div>
                                                        <span><span><span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></div>
                                                      <ul>
                                                        <li><span><span><span>you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.
                   <span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>
                                                      <div><span><span><span>To exercise these rights, you can contact us&nbsp;</span>
                                                        <span><span><span><span> by email at admin@javascriptseo.io, </span>
                                                          <span>
                                                            <span></span></span></span></span></span></span></span>
                                                        <span>or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</span>
                                                        <span><span></span></span><span><span><span><span>
                                                          <span><span></span></span></span></span></span></span></div>
                                                      <div><br></br></div>
                                                      <div id="policyupdates"><span><span><span><span><span id="control"><strong>
                                                        <span>11. DO WE MAKE UPDATES TO THIS NOTICE?</span></strong>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span></div>
                                                      <div><em><br></br></em></div>
                                                      <div><span><span><span><em><strong>In Short:&nbsp;</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></span></div>
                                                      <div><br></br></div><div><span><span><span>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</span></span></span></div><div><br></br></div>
                                                      <div id="contact"><span><span><span><span><span id="control"><strong>
                                                        <span>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></strong>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span>If you have questions or comments about this notice, you may
                             <span><span> email us at __________ </span></span>
                                                        <span><span><span>&nbsp;or by post to:</span></span></span></span></span></span></div>
                                                      <div><br></br></div>
                                                      <div><span><span><span><span><span><span><span> Javascriptseo.io </span></span></span></span></span>
                                                        <span><span><span></span></span></span></span></span></div>
                                                      <div>
                                                        <span><span> __________ <span><span></span></span></span></span></div>
                                                      <div>
                                                        <span>
                                                          <span> __________ <span><span></span>
                                                            <span></span></span></span></span></div>
                                                      <div><span> United States <span><span><span><span><span><span><span><span><span></span></span></span></span></span></span></span></span></span></span><span><span><span></span></span></span><span><span><span></span></span></span></div><div><br></br></div>
                                                      <div id="request"><span><span><span><span><span id="control"><strong>
                                                        <span>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></strong>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span>&nbsp;</span></div><div><br></br></div><div><span><span><span>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking&nbsp;</span><span><span><span><a href="https://app.termly.io/notify/e126d501-5621-40f8-971f-e1d4b83dde42" rel="noopener noreferrer" target="_blank">here</a></span></span></span><span></span></span></span><span>.
              We will respond to your request within 30 days.</span></div>
                                                    </div>
                                                    </div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
          </div>
        </div>

      </Container>
    </Layout>
  )
}
