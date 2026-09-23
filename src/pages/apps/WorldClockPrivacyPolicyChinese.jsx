import { motion } from "framer-motion";

const WorldClockPrivacyPolicyChinese = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            隐私政策 – 世界时钟
          </h1>

          <p className="text-gray-400 mb-10">
            生效日期：2026年5月24日
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                世界时钟（“本应用”）由{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>{" "}
                开发和发布。
              </p>

              <p className="mt-4">
                本隐私政策说明了当您使用世界时钟移动应用程序时，
                我们如何处理相关信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                信息收集与使用
              </h2>

              <p>
                世界时钟不会直接收集用户的个人身份信息。
              </p>

              <p className="mt-4">
                但是，本应用可能会使用可信赖的第三方服务，
                这些服务可能会收集有限的技术信息，例如：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>设备信息</li>
                <li>应用性能数据</li>
                <li>崩溃报告</li>
                <li>广告标识符</li>
                <li>使用分析数据</li>
              </ul>

              <p className="mt-4">
                这些信息仅用于改善应用程序的稳定性、性能和用户体验。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                第三方服务
              </h2>

              <p>
                本应用可能使用以下第三方服务：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Start.io</li>
                <li>Google Play 服务</li>
                <li>Firebase Analytics</li>
                <li>Firebase Crashlytics</li>
              </ul>

              <p className="mt-4">
                这些第三方服务可能会根据其各自的隐私政策收集和处理相关信息。
              </p>

              <div className="space-y-2 mt-4">
                <a
                  href="https://www.start.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Start.io 隐私政策
                </a>

                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Google 隐私政策
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                广告
              </h2>

              <p>
                世界时钟可能会展示由 Start.io 提供的广告。
              </p>

              <p className="mt-4">
                Start.io 可能会收集和处理某些信息，例如设备信息、
                广告标识符、IP 地址、应用使用数据、广告互动信息以及
                技术或诊断信息。这些信息可能用于提供广告、
                衡量广告效果、改进服务以及帮助防止欺诈或滥用。
              </p>

              <p className="mt-4">
                根据适用的法律法规以及可用的设置，
                广告可能是个性化广告或非个性化广告。
              </p>

              <a
                href="https://www.start.io/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition duration-300"
              >
                https://www.start.io/privacy
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                使用的权限
              </h2>

              <p>
                为了提供应用功能，世界时钟可能会请求以下权限：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <strong>互联网访问权限</strong> — 用于广告和在线服务。
                </li>

                <li>
                  <strong>通知权限</strong> — 用于闹钟、提醒和通知。
                </li>

                <li>
                  <strong>精确闹钟权限</strong> — 用于安排准确的闹钟和提醒。
                </li>

                <li>
                  <strong>开机完成权限</strong> — 用于设备重启后恢复闹钟和小组件。
                </li>

                <li>
                  <strong>唤醒锁定权限</strong> — 用于确保闹钟能够正常运行。
                </li>

                <li>
                  <strong>存储 / 媒体访问权限</strong> — 用于选择自定义闹钟铃声
                  或音频文件。
                </li>

                <li>
                  <strong>小组件访问</strong> — 用于提供主屏幕时钟小组件
                  和实时钟表功能。
                </li>
              </ul>

              <p className="mt-4">
                这些权限仅用于应用程序的核心功能。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据安全
              </h2>

              <p>
                我们重视用户隐私，并采取合理措施保护应用功能以及
                第三方服务所处理的数据。
              </p>

              <p className="mt-4">
                我们不会向未经授权的第三方出售、交易或分享个人信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                儿童隐私
              </h2>

              <p>
                世界时钟不面向13岁以下的儿童。
              </p>

              <p className="mt-4">
                我们不会故意收集儿童的个人信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                隐私政策的变更
              </h2>

              <p>
                本隐私政策可能会定期更新。任何变更都会反映在本页面上。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                联系我们
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>电子邮件：info@chtechgiant.com</p>
                  <p>电话：+91 9980785020</p>
                  <p>所在地：印度卡纳塔克邦达文盖雷 – 577001</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorldClockPrivacyPolicyChinese;