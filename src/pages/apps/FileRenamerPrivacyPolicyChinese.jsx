import { motion } from "framer-motion";

const FileRenamerPrivacyPolicyChinese = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            隐私政策 – File Renamer – Bulk Rename
          </h1>

          <p className="text-gray-400 mb-10">
            生效日期：2026年3月
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
                  File Renamer – Bulk Rename
                </span>
                。
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
                File Renamer – Bulk Rename 不会收集、存储或共享用户的个人信息。
              </p>

              <p className="mt-4">
                本应用不要求用户注册账户或登录。
              </p>

              <p className="mt-4">
                所有文件重命名操作均在您的设备本地完成。
              </p>
            </section>

            {/* File Access Permission */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                文件访问权限
              </h2>

              <p>
                本应用可能会请求访问您设备上的文件和存储空间，仅用于以下目的：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>选择文件</li>
                <li>重命名文件</li>
                <li>保存重命名后的文件</li>
              </ul>

              <p className="mt-4">
                您的文件不会被上传到外部服务器，并始终由您自行控制。
              </p>
            </section>

            {/* Advertisements */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                广告
              </h2>

              <p>
                本应用可能会显示由第三方广告服务提供的广告，例如 Google AdMob。
              </p>

              <p className="mt-4">
                这些广告服务可能会收集有限的非个人信息，包括：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>设备信息</li>
                <li>广告标识符</li>
                <li>应用互动数据</li>
                <li>大致位置信息</li>
              </ul>

              <p className="mt-4">
                这些数据可能用于提供、个性化和改进广告服务。
              </p>

              <p className="mt-4">
                如需了解更多信息，请查看 Google 的隐私政策：
              </p>

              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition duration-300"
              >
                Google 隐私政策
              </a>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据安全
              </h2>

              <p>
                我们重视用户的隐私和数据安全。由于本应用不会收集或存储个人信息，
                您的文件和相关数据将保留在您的设备上。
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                儿童隐私
              </h2>

              <p>
                File Renamer – Bulk Rename 不专门面向13岁以下的儿童。
              </p>

              <p className="mt-4">
                我们不会故意收集13岁以下儿童的个人信息。
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                隐私政策的变更
              </h2>

              <p>
                我们可能会不时更新本隐私政策。任何更新都会发布在本页面，
                并会更新相应的生效日期。
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                联系我们
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>印度卡纳塔克邦达文盖雷 577001</p>
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

export default FileRenamerPrivacyPolicyChinese;