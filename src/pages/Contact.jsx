import React from "react";
import styles from "./Common.module.css";
import mailme from "../images/Contact/wired-flat-1141-email-hover-rotation.gif";
import CallMe from "../images/Contact/system-solid-58-call-phone.gif"
function Contact() {
    return (
        <div className={`${styles.HomeBackground} grid place-items-center ${styles.ContactBackground}`}>
            <div className="w-[90%] h-[100%] m-[5%] ml-[3%] mr-[3%]">
                <div className="grid place-items-center mt-[120px] p-[2%]">
                    <div className={`${styles.ContactBlock} `}>
                        <h1 className="font-BrunoAce max-[486px]:text-[1.5rem]">Get in touch</h1>
                        <a href="tel:+919748695030" className="grid place-items-center max-[500]:w-[150px]">
                            <h2 className="font-Poppins bg-blue-400  border-1 p-[1%] m-[0.5%] rounded-lg w-[90%]"><span className="text-[1.5rem] flex justify-center align-middle text-center items-center flex-wrap text-white"><span className="m-[0.2%]"><img src={CallMe} className="w-[50px] h-auto"></img></span>Call me </span><div className="text-blue-700 text-[1.3rem] font-Tektur">+91 9748695030</div></h2>
                        </a>
                        <a href="mailto:srinjoy12345@gmail.com" className={`${styles.MailLink} w-[100%] grid place-items-center`}><button className="flex justify-evenly w-[90%] align-center align-middle text-center flex-wrap"><span className={`${styles.MailmeDiv} h-[100%] text-center text-[1.5rem] font-Poppins w-[200px]`}>Mail me</span><span><img src={mailme} className={`w-[40px] h-auto`}></img></span><span className={`${styles.MyMail} font-Lekton`}>srinjoy12345@gmail.com</span></button></a>
                        <div>
                            <div className={`${styles.hover_But}`}>
                                <a className={`${styles.ContactItems}`} href="https://www.linkedin.com/in/srinjoy-roy-161003251/" target="_blank"><div className="hover:bg-blue-200 transition ease-in-out delay-150 font-Poppins hover:scale-90">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: "#0077b5" }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg><span>Connect on LinkedIn</span>
                                </div></a>
                                <a className={styles.ContactItems} href="https://github.com/Srinjoy1604" target="_blank"><div className="hover:bg-slate-300 transition ease-in-out delay-150 font-Poppins hover:scale-90">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: "#333" }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg><span>Visit my Github</span>
                                </div></a>
                                <a className={styles.ContactItems} href="https://www.instagram.com/srinjoy1604/" target="_blank"><div className="hover:bg-pink-200 transition ease-in-out delay-150 font-Poppins hover:scale-90">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: "#c13584" }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg><span>Connect on Instagram</span>
                                </div></a>
                                <a className={styles.ContactItems} href="https://discordapp.com/users/519474388987281429" target="_blank"><div className="hover:bg-violet-200 transition ease-in-out delay-50 font-Poppins hover:scale-90">
                                    <svg
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: "#7289da" }}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    >
                                        <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                                    </svg><span>Message me on Discord</span>
                                </div></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Contact;