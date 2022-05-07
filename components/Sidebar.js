import React from 'react'
import { ConnectButton } from 'web3uikit'

const isAuthenticated = true
const username='Tirth'

export const Sidebar = () => {
  const styles = {
      container: `h-full w-[300px] flex flex-col bg-[#fff] static`,
      profile: ` w-full py-16 flex flex-col justify-center items-center rounded-r-3xl bg-gradient-to-t from-[#0d141c] to-[#42667e] mt-[40px] mb-[50px] border-2 border-[#fb9701]`,
      profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
      profilePic: `rounded-3xl object-cover`,
      welcome: ` text-md mb-2 font-bold text-2xl text-white`,
  }
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {isAuthenticated && (
          <>
            <div className={styles.profilePicContainer}>
              <image
                src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                alt='profile'
                className={styles.profilePic}
                height={100}
                width={100}
              />
            </div>
            {!username ? (
              <>
                <div className={styles.username}>
                  <input
                    type='text'
                    placeholder='Username....'
                    className={styles.usernameInput}
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                  />
                </div>
                <button
                  className={styles.setNickname}
                  onClick={handleSetUsername}
                >
                  Set Nickname
                </button>
              </>
            ) : (
              <div>
                <div className={styles.welcome}>Wecome {username}</div>
              </div>
            )}
          </>
        )}
        <div className={styles.connectButton}>
          <ConnectButton />
        </div>
      </div>

      
    </div>
  )
}
export default Sidebar