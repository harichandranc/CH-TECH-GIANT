import { motion } from "framer-motion";

const ImageToPDFPrivacyPolicyChinese = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            隐私政策 – 图片转 PDF
          </h1>

          <p className="text-gray-400 mb-10">
            最后更新日期：2026年5月24日
          </p>

          <div className="space-y-10 text-gray-300 leading-8">

            {/* Introduction */}
            <section>
              <p>
                欢迎使用由{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>{" "}
                开发的{" "}
                <span className="text-cyan-400 font-semibold">
                  图片转 PDF
                </span>{" "}
                应用。
              </p>

              <p className="mt-4">
                我们非常重视您的隐私。本隐私政策说明本应用如何处理用户信息。
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                信息收集
              </h2>

              <p>
                图片转 PDF 不会直接收集、存储或共享用户的个人信息。
              </p>

              <p className="mt-4">
                本应用不要求用户注册账户或登录。
              </p>

              <p className="mt-4">
                所有图片处理和 PDF 生成操作均尽可能在您的设备本地完成。
              </p>

              <p className="mt-4">
                但是，本应用集成的第三方广告服务可能会根据其隐私政策处理某些技术信息或广告相关信息。
              </p>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                使用的权限
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>存储空间 / 照片访问权限</li>
                <li>从设备中选择图片</li>
                <li>保存生成的 PDF 文件</li>
                <li>分享导出的 PDF 文档</li>
              </ul>

              <p className="mt-4">
                本应用仅访问用户主动选择或授权用于相关操作的文件和照片。
              </p>
            </section>

            {/* File Handling */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                文件处理
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>您的图片保留在您的设备上</li>
                <li>我们不会将您的文件上传到我们的服务器</li>
                <li>我们不会出售或共享您的文件</li>
                <li>PDF 生成操作在您的设备本地完成</li>
              </ul>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                广告
              </h2>

              <p>
                本应用可能会显示由第三方广告服务{" "}
                <span className="text-cyan-400 font-semibold">
                  Start.io
                </span>{" "}
                提供的广告。
              </p>

              <p className="mt-4">
                Start.io 可能会根据其隐私政策，为广告、分析、欺诈预防及相关服务收集和处理设备中的某些信息。根据适用的设置和法规，这些信息可能包括：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>设备信息</li>
                <li>广告标识符或其他设备标识符</li>
                <li>IP 地址</li>
                <li>应用使用情况和互动信息</li>
                <li>大致位置信息</li>
              </ul>

              <p className="mt-4">
                这些信息可能用于提供广告、衡量广告效果、进行分析、防止欺诈以及改进广告服务。
              </p>

              <p className="mt-4">
                Start.io 对相关信息的收集和处理受其自身隐私政策以及适用法律的约束。
              </p>

              <p className="mt-4">
                如需了解更多信息，请查看 Start.io 的隐私政策：
              </p>

              <a
                href="https://www.start.io/policy/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition duration-300"
              >
                Start.io 隐私政策
              </a>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据安全
              </h2>

              <p>
                由于图片处理和 PDF 生成操作在设备本地完成，您的文件始终由您自行控制。
              </p>

              <p className="mt-4">
                我们不会将您的图片或生成的 PDF 文件上传或存储在我们的外部服务器上。
              </p>

              <p className="mt-4">
                第三方广告服务处理的信息将按照其各自的隐私政策进行处理。
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                儿童隐私
              </h2>

              <p>
                本应用并非专门面向13岁以下的儿童。
              </p>

              <p className="mt-4">
                我们不会故意直接收集儿童的个人信息。
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                隐私政策的变更
              </h2>

              <p>
                我们可能会不时更新本隐私政策。任何更新都会发布在本页面，并更新相应的日期。
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                联系我们
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
                <div className="space-y-2">
                  <p>CH TECH GIANT (OPC) PRIVATE LIMITED</p>
                  <p>印度卡纳塔克邦达文盖雷 – 577001</p>
                  <p>电子邮箱：info@chtechgiant.com</p>
                  <p>电话：+91 9980785020</p>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageToPDFPrivacyPolicyChinese;