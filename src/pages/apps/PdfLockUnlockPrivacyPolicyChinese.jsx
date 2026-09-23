import { motion } from "framer-motion";

const PDFLockUnlockPrivacyPolicyChinese = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            隐私政策 – PDF 加锁与解锁
          </h1>

          <p className="text-gray-400 mb-10">
            生效日期：2026年7月26日
          </p>

          <div className="space-y-10 text-gray-300 leading-8">

            <section>
              <p>
                欢迎使用{" "}
                <span className="text-cyan-400 font-semibold">
                  PDF 加锁与解锁
                </span>
                （以下简称“本应用”）。我们非常重视您的隐私。
                本隐私政策说明了您使用本应用时，我们如何收集、使用和保护您的信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. 我们收集的信息
              </h2>

              <p>
                本应用旨在安全地保护和解锁 PDF 文档。
                我们仅收集提供相关服务所必需的信息。
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">
                PDF 文件
              </h3>

              <p>
                当您选择锁定或解锁 PDF 文件时，所选择的文件会被临时上传到我们的安全服务器进行处理。
              </p>

              <p className="mt-4">
                上传的文件仅用于以下目的：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>使用密码保护 PDF 文件</li>
                <li>移除 PDF 文件的密码</li>
                <li>生成处理后的 PDF 文件供您下载</li>
              </ul>

              <p className="mt-4">
                我们不会将您的文件用于其他目的。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. 临时文件处理
              </h2>

              <p>
                上传的 PDF 文件仅在完成您请求的操作所需的时间内进行临时处理。
              </p>

              <p className="mt-4">
                文件处理完成后会自动从我们的服务器中删除，不会被永久存储。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. 广告
              </h2>

              <p>
                本应用使用{" "}
                <strong>Start.io</strong>{" "}
                提供和展示广告。
              </p>

              <p className="mt-4">
                Start.io 可能会从您的设备收集或处理某些信息，用于广告展示及相关目的，其中可能包括：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>设备信息</li>
                <li>广告标识符</li>
                <li>IP 地址</li>
                <li>应用使用和广告互动信息</li>
                <li>诊断和技术信息</li>
              </ul>

              <p className="mt-4">
                Start.io 收集的信息将根据其自身的隐私政策及适用法律进行处理。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. 数据安全
              </h2>

              <p>
                我们采取合理的安全措施来保护您的信息。
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>所有通信均使用安全的 HTTPS 连接。</li>
                <li>PDF 文件会以安全的方式进行处理。</li>
                <li>我们不会永久保存上传的文档。</li>
              </ul>

              <p className="mt-4">
                但是，任何通过互联网进行的数据传输都无法保证100%安全。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. 应用权限
              </h2>

              <p>
                本应用可能请求以下必要权限：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>从您的设备中选择 PDF 文件</li>
                <li>保存处理后的 PDF 文件</li>
                <li>访问互联网以处理文档</li>
                <li>显示广告</li>
              </ul>

              <p className="mt-4">
                本应用不会访问不必要的个人信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. 儿童隐私
              </h2>

              <p>
                本应用不面向13岁以下的儿童。
              </p>

              <p className="mt-4">
                我们不会在明知的情况下收集儿童的个人信息。
              </p>

              <p className="mt-4">
                如果您认为儿童向我们提供了个人信息，请联系我们，以便我们采取措施删除相关信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. 第三方服务
              </h2>

              <p>
                本应用使用以下第三方服务：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Start.io</li>
                <li>Google Play 服务</li>
              </ul>

              <p className="mt-4">
                这些第三方服务可能会根据其各自的隐私政策收集或处理相关信息。
              </p>

              <div className="mt-4 space-y-2">
                <a
                  href="https://www.start.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Start.io 隐私政策
                </a>

                <a
                  href="https://play.google.com/about/play-terms/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Google Play 服务
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. 您的权利
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>您可以随时停止使用本应用。</li>
                <li>您可以从设备中删除已处理的文件。</li>
                <li>您可以联系我们咨询与隐私相关的问题。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. 隐私政策的变更
              </h2>

              <p>
                我们可能会不时更新本隐私政策。
              </p>

              <p className="mt-4">
                如有任何变更，我们将在本页面发布更新后的生效日期。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. 联系我们
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>电子邮件：support@chtechgiant.com</p>
                  <p>网站：https://chtechgiant.com</p>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PDFLockUnlockPrivacyPolicyChinese;