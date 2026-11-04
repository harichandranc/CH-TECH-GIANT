import { motion } from "framer-motion";

const CGPASGPAPrivacyPolicyChinese = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            隐私政策 – CGPA/SGPA 计算器
          </h1>

          <p className="text-gray-400 mb-10">
            最后更新日期：2026年11月4日
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
                  CGPA/SGPA 计算器
                </span>
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
                CGPA/SGPA 计算器不会直接收集、存储或共享用户的个人信息。
              </p>

              <p className="mt-4">
                本应用主要可以离线运行，并且不要求：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>注册账户</li>
                <li>登录</li>
                <li>提供个人资料</li>
                <li>核心计算功能所需的互联网连接</li>
              </ul>

              <p className="mt-4">我们不会直接收集以下信息：</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>姓名</li>
                <li>电子邮箱地址</li>
                <li>电话号码</li>
                <li>教育机构信息</li>
                <li>密码</li>
                <li>位置信息</li>
              </ul>

              <p className="mt-4">
                但是，本应用集成的第三方广告服务可能会根据其隐私政策处理某些技术信息或广告相关信息，具体内容如下所述。
              </p>
            </section>

            {/* Academic Data */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                学业数据
              </h2>

              <p>
                所有 SGPA、CGPA、成绩、学分和学期计算均在您的设备本地进行处理。
              </p>

              <p className="mt-4">
                您在计算器中输入的学业信息不会上传、传输或存储在我们的外部服务器上。
              </p>
            </section>

            {/* Advertisements */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                广告
              </h2>

              <p>
                本应用通过{" "}
                <span className="text-cyan-400 font-semibold">
                  Unity LevelPlay
                </span>{" "}
                广告中介平台展示广告。根据实际配置和已启用的广告网络，广告可能由
                Unity Ads、ironSource 或其他已启用的广告合作伙伴提供。
              </p>

              <p className="mt-4">
                广告服务提供商可能会根据其隐私政策，为广告投放、分析、防止欺诈及相关服务收集和处理设备中的某些信息。根据具体服务、配置和适用法规，这些信息可能包括：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>设备信息</li>
                <li>广告标识符或其他设备标识符</li>
                <li>IP 地址</li>
                <li>应用使用情况和互动信息</li>
                <li>大致位置信息</li>
                <li>广告展示和点击记录</li>
                <li>诊断及防止欺诈所需的信息</li>
              </ul>

              <p className="mt-4">
                这些信息可能用于提供广告、衡量广告效果、进行分析、防止欺诈以及改进广告服务。
              </p>

              <p className="mt-4">
                广告服务提供商对相关信息的收集和处理受其自身隐私政策以及适用法律的约束。
              </p>

              <p className="mt-4">
                如需了解更多信息，请查看相关服务提供商的隐私政策：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <a
                    href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300 underline"
                  >
                    Unity 隐私政策
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.is.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300 underline"
                  >
                    ironSource 隐私政策
                  </a>
                </li>
              </ul>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                权限
              </h2>

              <p>
                CGPA/SGPA 计算器不会为了实现核心计算功能而要求特殊的设备权限。
                广告 SDK 或其他集成服务可能使用的权限取决于应用的实际配置。
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                儿童隐私
              </h2>

              <p>本应用用于教育目的，适合一般学生使用。</p>

              <p className="mt-4">
                我们不会故意直接收集儿童的个人信息。
              </p>

              <p className="mt-4">
                第三方广告服务可能会根据其自身隐私政策及适用的法律和监管要求处理相关信息。
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                第三方服务
              </h2>

              <p>本应用可能使用以下第三方服务：</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Unity LevelPlay — 广告中介服务</li>
                <li>Unity Ads — 广告服务（如已启用）</li>
                <li>ironSource — 广告服务（如已启用）</li>
                <li>广告中介配置中启用的其他广告合作伙伴</li>
              </ul>

              <p className="mt-4">
                这些第三方服务可能根据其自身隐私政策收集或处理技术信息、广告信息或应用使用相关信息。
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据安全
              </h2>

              <p>
                由于本应用不会将学业信息上传或存储在我们的外部服务器上，
                您的计算器数据会保留在您的设备上。
              </p>

              <p className="mt-4">
                第三方广告服务所处理的信息将按照其各自的隐私政策进行处理。
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据共享
              </h2>

              <p>
                我们不会将学业计算数据上传到我们的外部服务器，也不会将其共享给广告服务提供商。
                第三方广告服务可能会按照本政策所述，独立处理技术信息或广告相关信息。
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

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>印度卡纳塔克邦达文盖雷 – 577001</p>

                  <p>
                    电子邮箱：{" "}
                    <a
                      href="mailto:info@chtechgiant.com"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      info@chtechgiant.com
                    </a>
                  </p>

                  <p>
                    电话：{" "}
                    <a
                      href="tel:+919980785020"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      +91 9980785020
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Consent */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                同意
              </h2>

              <p>
                使用 CGPA/SGPA 计算器应用即表示您已阅读本隐私政策，并了解本政策中所述的信息处理方式。
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CGPASGPAPrivacyPolicyChinese;