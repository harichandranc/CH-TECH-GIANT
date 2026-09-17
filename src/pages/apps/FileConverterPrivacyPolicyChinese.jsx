import React from "react";
import { motion } from "framer-motion";

const FileConverterPrivacyPolicyChinese = () => {
  return (
    <div className="min-h-screen bg-[#050b14] text-gray-300 px-4 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            隐私政策
          </h1>

          <p className="text-gray-400">
            File Converter
          </p>

          <p className="text-sm text-gray-500 mt-2">
            最后更新日期：2026年9月17日
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-[#0b1422] border border-cyan-500/20 rounded-2xl p-6 md:p-10 shadow-xl"
        >

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="section-title">1. 隐私政策简介</h2>

            <p>
              File Converter 是一款文件转换和文件处理应用程序，
              由{" "}
              <strong className="text-white">
                CH TECH GIANT (OPC) PRIVATE LIMITED
              </strong>
              开发。
            </p>

            <p className="mt-4">
              我们重视您的隐私，并致力于保护您的信息。
              本隐私政策说明您使用 File Converter 应用程序及相关服务时，
              信息如何被处理。
            </p>

            <p className="mt-4">
              使用 File Converter 即表示您已阅读并理解本隐私政策。
            </p>
          </section>

          {/* Information */}
          <section className="mb-10">
            <h2 className="section-title">2. 我们收集的信息</h2>

            <p>
              File Converter 不要求您创建账户。
              使用应用程序的主要功能时，通常不需要提供姓名、电子邮件地址、
              电话号码或其他注册信息。
            </p>

            <p className="mt-4">
              根据您使用的具体功能，应用程序可能会处理执行相关功能所需的
              文件以及必要的技术信息。
            </p>

            <h3 className="sub-title">2.1 您选择的文件</h3>

            <p>
              您可以选择文件进行转换或处理，包括文档、PDF、图片、
              视频、音频、文本文件以及其他受支持的文件格式。
            </p>

            <p className="mt-4">
              某些操作可以直接在您的设备上完成。
              部分高级转换功能可能需要将您选择的文件临时传输到我们的转换服务器，
              以完成您请求的处理。
            </p>

            <h3 className="sub-title">2.2 技术信息</h3>

            <p>
              应用程序以及第三方广告服务可能会处理提供广告、
              安全、诊断和服务运行所需的某些技术信息。
            </p>

            <p className="mt-4">
              根据服务及其配置，这些信息可能包括：
            </p>

            <ul className="privacy-list">
              <li>IP 地址</li>
              <li>操作系统信息</li>
              <li>设备信息</li>
              <li>应用程序信息</li>
              <li>网络信息</li>
              <li>广告标识符</li>
              <li>广告互动信息</li>
            </ul>
          </section>

          {/* File Processing */}
          <section className="mb-10">
            <h2 className="section-title">3. 文件处理</h2>

            <p>
              File Converter 同时提供本地文件处理和服务器文件处理功能。
            </p>

            <h3 className="sub-title">3.1 本地处理</h3>

            <p>
              在支持本地处理的功能中，文件会直接在您的设备上进行处理，
              无需上传到我们的服务器。
            </p>

            <h3 className="sub-title">3.2 服务器处理</h3>

            <p>
              某些高级或资源占用较高的转换功能可能需要使用服务器进行处理。
            </p>

            <p className="mt-4">
              当您使用这些功能时，您选择的文件可能会通过安全网络连接
              临时传输到我们的转换服务器，完成处理后再返回您的设备。
            </p>

            <p className="mt-4">
              我们的转换基础设施可能使用 FFmpeg、LibreOffice、
              Sharp、PDF 处理库以及其他用于文件转换的软件技术。
            </p>
          </section>

          {/* Storage */}
          <section className="mb-10">
            <h2 className="section-title">4. 文件存储和保留</h2>

            <p>
              上传到服务器进行转换的文件，仅用于完成您请求的转换或处理操作。
            </p>

            <p className="mt-4">
              在正常的转换流程中，我们不会永久保存您上传的文件。
              文件在处理期间可能会临时存在于服务器上。
            </p>

            <p className="mt-4">
              根据我们的服务器清理程序，临时文件会在处理完成后进行删除，
              在技术条件允许的情况下，我们会尽快清理这些临时文件。
            </p>

            <p className="mt-4">
              如果文件包含高度敏感或机密信息，请您在使用服务器转换功能前
              仔细考虑是否适合上传。
            </p>
          </section>

          {/* Advertising */}
          <section className="mb-10">
            <h2 className="section-title">5. 广告</h2>

            <p>
              File Converter 可能通过第三方广告服务展示广告。
            </p>

            <p className="mt-4">
              我们的应用程序目前使用{" "}
              <strong className="text-white">
                Start.io
              </strong>{" "}
              提供广告服务。
            </p>

            <p className="mt-4">
              广告服务提供商可能会根据其隐私政策以及适用法律，
              处理某些技术信息，例如广告标识符、IP 地址、设备信息、
              应用程序信息、网络信息以及广告互动数据，
              用于展示和衡量广告等相关目的。
            </p>

            <p className="mt-4">
              有关 Start.io 隐私处理方式的更多信息，
              请查看其隐私政策。
            </p>

            <a
              href="https://www.start.io/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 underline"
            >
              Start.io 隐私政策
            </a>
          </section>

          {/* Permissions */}
          <section className="mb-10">
            <h2 className="section-title">6. 应用程序权限</h2>

            <p>
              File Converter 可能会请求提供特定功能所需的权限。
            </p>

            <ul className="privacy-list">
              <li>
                <strong>文件 / 媒体权限：</strong>
                用于允许您选择、读取、保存或管理受支持的文件。
              </li>

              <li>
                <strong>互联网权限：</strong>
                用于服务器转换、下载处理后的文件、显示广告
                以及其他在线功能。
              </li>
            </ul>

            <p className="mt-4">
              我们仅在相关功能或服务需要时使用相应权限。
            </p>
          </section>

          {/* Third Party */}
          <section className="mb-10">
            <h2 className="section-title">7. 第三方服务</h2>

            <p>
              为了提供特定功能，File Converter 可能使用第三方技术和服务。
            </p>

            <ul className="privacy-list">
              <li>Start.io — 广告服务</li>
              <li>FFmpeg — 多媒体处理</li>
              <li>LibreOffice — 文档转换</li>
              <li>Sharp — 图片处理</li>
              <li>PDF 处理库 — PDF 相关操作</li>
            </ul>

            <p className="mt-4">
              第三方服务可能根据其自身的隐私政策和服务条款处理相关信息。
            </p>
          </section>

          {/* Security */}
          <section className="mb-10">
            <h2 className="section-title">8. 数据安全</h2>

            <p>
              我们采取合理的技术和组织措施，以保护通过我们的服务处理的信息。
            </p>

            <p className="mt-4">
              在支持的情况下，服务器文件传输会通过安全的网络连接进行。
            </p>

            <p className="mt-4">
              但是，任何电子传输或存储系统都无法保证绝对安全。
            </p>
          </section>

          {/* Children */}
          <section className="mb-10">
            <h2 className="section-title">9. 儿童隐私</h2>

            <p>
              File Converter 是一款通用工具类应用程序，
              并非专门面向儿童设计。
            </p>

            <p className="mt-4">
              由于本应用程序不要求用户注册账户，
              我们不会故意要求儿童提供账户注册所需的个人信息。
            </p>
          </section>

          {/* Responsibility */}
          <section className="mb-10">
            <h2 className="section-title">10. 用户责任</h2>

            <p>
              您需要对通过 File Converter 选择处理的文件和信息负责。
            </p>

            <p className="mt-4">
              如果您不希望文件经过服务器临时处理，
              请不要使用需要服务器处理的转换功能处理机密或高度敏感的信息。
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-10">
            <h2 className="section-title">11. 数据共享</h2>

            <p>
              我们不会出售您上传的文件，
              也不会将文件内容用于广告目的。
            </p>

            <p className="mt-4">
              当您主动使用服务器转换功能时，
              文件可能会传输到我们的转换基础设施进行处理。
            </p>

            <p className="mt-4">
              当第三方服务需要提供其服务时，
              某些技术信息也可能由第三方服务提供商进行处理，
              例如广告服务提供商。
            </p>
          </section>

          {/* Changes */}
          <section className="mb-10">
            <h2 className="section-title">12. 隐私政策的修改</h2>

            <p>
              我们可能会根据应用程序、服务、法律要求或隐私实践的变化，
              不时更新本隐私政策。
            </p>

            <p className="mt-4">
              如果隐私政策发生变化，我们将在本页面发布更新后的版本，
              并修改“最后更新日期”。
            </p>
          </section>

          {/* Consent */}
          <section className="mb-10">
            <h2 className="section-title">13. 您的同意</h2>

            <p>
              在阅读本隐私政策后继续使用 File Converter，
              即表示您了解本政策中所说明的信息处理方式。
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="section-title">14. 联系我们</h2>

            <p>
              如果您对本隐私政策有任何疑问、意见或请求，
              可以通过以下方式联系我们：
            </p>

            <div className="mt-5 bg-[#07101c] border border-cyan-500/10 rounded-xl p-5">
              <p className="text-white font-semibold">
                CH TECH GIANT (OPC) PRIVATE LIMITED
              </p>

              <p className="mt-2">
                印度卡纳塔克邦达文盖雷 – 577001
              </p>

              <p className="mt-2">
                电子邮件：{" "}
                <a
                  href="mailto:info@chtechgiant.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  info@chtechgiant.com
                </a>
              </p>

              <p className="mt-2">
                电话：{" "}
                <a
                  href="tel:+919980785020"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  +91 9980785020
                </a>
              </p>
            </div>
          </section>

        </motion.div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} CH TECH GIANT (OPC) PRIVATE LIMITED.
          版权所有。
        </div>
      </div>

      {/* Page Styles */}
      <style>{`
        .section-title {
          color: #22d3ee;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .sub-title {
          color: #e5e7eb;
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .privacy-list {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-top: 1rem;
        }

        .privacy-list li {
          margin-bottom: 0.5rem;
        }

        p {
          line-height: 1.8;
        }
      `}</style>
    </div>
  );
};

export default FileConverterPrivacyPolicyChinese;