
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
            生效日期：2026年11月4日
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
                我们重视您的隐私。本隐私政策说明本应用如何处理相关信息、
                访问设备文件，以及使用第三方广告服务。
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. 信息收集
              </h2>

              <p>
                本应用不要求用户注册账户或登录。文件重命名操作旨在您的设备本地完成。
              </p>

              <p className="mt-4">
                我们不会通过文件重命名功能主动直接收集用户的个人信息。
                但是，本应用集成的第三方广告及广告中介 SDK
                可能会按照本政策所述处理某些信息。
              </p>
            </section>

            {/* File Access */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. 文件访问权限
              </h2>

              <p>
                本应用可能会请求访问文件，或使用 Android
                文件选择功能，以便执行以下操作：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>选择需要重命名的文件</li>
                <li>修改文件名称</li>
                <li>保存或应用修改后的文件名称</li>
              </ul>

              <p className="mt-4">
                文件访问仅用于应用的文件重命名功能。您应自行确认所选文件，
                并在确认操作前检查重命名规则和结果。
              </p>

              <p className="mt-4">
                本应用旨在您的设备本地处理文件。我们不会主动将文件内容上传到
                自有服务器以执行文件重命名。此说明不代表第三方 SDK
                不会为其自身服务处理其他信息。
              </p>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. 广告与广告中介服务
              </h2>

              <p>
                File Renamer – Bulk Rename 通过展示广告获得支持。
                本应用使用 Unity LevelPlay 广告中介平台管理和投放广告。
              </p>

              <p className="mt-4">
                根据应用中实际启用的 SDK、广告网络适配器及配置，
                广告服务可能包括 Unity Ads 和 ironSource。
              </p>

              <p className="mt-4">
                根据启用的广告服务、设备设置、用户同意选项及适用法律，
                广告合作伙伴可能收集或处理以下信息：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>设备信息及设备标识符</li>
                <li>广告 ID（在可用且允许的情况下）</li>
                <li>IP 地址及根据 IP 地址推断的大致位置</li>
                <li>广告展示、点击及广告互动信息</li>
                <li>应用使用情况、诊断及性能信息</li>
                <li>用于广告效果衡量和防止欺诈的信息</li>
                <li>适用情况下的用户同意及隐私偏好信号</li>
              </ul>

              <p className="mt-4">
                实际收集的信息取决于已启用的广告 SDK 和广告网络、
                相关配置、设备设置及用户的隐私选择。
                我们无法控制所有第三方广告服务商独立进行的数据处理活动。
              </p>

              <p className="mt-4">
                第三方广告服务商可能根据各自的隐私政策和适用法律处理相关信息。
                在法律要求的情况下，我们将按照适用要求处理广告同意和隐私选择。
              </p>

              <p className="mt-4">
                您可以通过以下链接查看相关服务商的隐私政策：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <a
                    href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline transition duration-300"
                  >
                    Unity 隐私政策
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.is.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline transition duration-300"
                  >
                    ironSource 隐私政策
                  </a>
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. 数据共享与第三方服务
              </h2>

              <p>
                我们不会出售用户所选文件的内容或文件名称。
                在集成相关服务的情况下，支持广告投放、应用功能、
                诊断或安全服务的第三方服务商可能会处理某些信息。
              </p>

              <p className="mt-4">
                这些服务商可能根据各自的条款和隐私政策处理信息。
                具体处理方式取决于所使用的服务及其配置。
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. 数据安全与保留
              </h2>

              <p>
                文件重命名操作旨在您的设备本地完成。
                我们不会主动将重命名后的文件内容存储在自有服务器上。
              </p>

              <p className="mt-4">
                第三方广告服务处理的信息将根据相应服务商的隐私政策、
                数据保留规则和安全措施进行处理。
              </p>

              <p className="mt-4">
                任何电子数据处理或存储方式都无法保证绝对安全。
                建议您在修改重要文件之前先进行备份。
              </p>
            </section>

            {/* Privacy Choices */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. 您的隐私选择
              </h2>

              <p>
                在应用支持的情况下，您可以通过设备设置或应用提供的同意选项，
                管理可用的广告及隐私设置。
              </p>

              <p className="mt-4">
                根据您所在的地区，您可能有权依法请求访问、更正或删除相关个人信息。
                对于由第三方广告服务商收集的信息，您可能需要直接联系相应的服务商。
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. 儿童隐私
              </h2>

              <p>
                本应用的目标受众及适用年龄限制以应用的实际发布设置和适用法律为准。
                我们不会在违反适用法律的情况下，故意直接收集儿童的个人信息。
              </p>

              <p className="mt-4">
                广告 SDK 可能对儿童使用、年龄限制和用户同意有额外要求。
                应根据应用声明的目标受众正确配置广告服务。
              </p>
            </section>

            {/* Third Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. 第三方链接
              </h2>

              <p>
                本应用或其广告可能包含指向第三方网站或服务的链接。
                我们不对外部服务的内容或隐私处理方式负责。
                在向第三方提供个人信息之前，请阅读其隐私政策。
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. 隐私政策的变更
              </h2>

              <p>
                我们可能会根据应用功能、广告集成、法律要求或数据处理方式的变化，
                不时更新本隐私政策。
                更新后的政策将在本页面发布，并注明修订后的生效日期。
              </p>

              <p className="mt-4">
                建议您定期查看本页面，以了解最新的隐私政策。
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. 联系我们
              </h2>

              <p className="mb-4">
                如果您对本隐私政策或本应用的隐私处理方式有任何疑问，
                请通过以下方式联系我们：
              </p>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>地址：印度卡纳塔克邦达文盖雷 577001</p>

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

                  <p>
                    网站：{" "}
                    <a
                      href="https://chtechgiant.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      chtechgiant.com
                    </a>
                  </p>
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
