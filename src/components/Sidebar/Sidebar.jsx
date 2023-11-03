'use client';

/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import Scrollbars from 'react-custom-scrollbars-2';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import SideBarLink from './SideBarLink';
import SubMenuContainer from './SubMenuContainer';
import Link from 'next/link';
import SubMenuContainerL2 from './SubMenuContainerL2';

const Sidebar = (props) => {
  const locale = useParams()?.locale;
  const [isSideMenu, setSideMenu] = useState('');
  const [isSideMenuTwo, setSideMenuTwo] = useState('');
  const { t } = useTranslation(locale, 'sidebar');
  const history = useRouter();

  const toggleSidebar = (value) => {
    setSideMenu(value);
    setSideMenuTwo('');
  };
  const toggleSidebarTwo = (value) => {
    setSideMenuTwo(value);
  };
  const expandMenu = () => {
    document.body.classList.remove('expand-menu');
  };
  const expandMenuOpen = () => {
    document.body.classList.add('expand-menu');
  };
  const pageRefresh = (url, page) => {
    history.push(`/dream-pos/${url}/${page}`);
    window.location.reload();
  };
  //   const location = useLocation();
  const pathname = usePathname();

  console.log(pathname, '<<<');

  useEffect(() => {
    document.querySelector('.main-wrapper').classList.remove('slide-nav');
    document.querySelector('.sidebar-overlay').classList.remove('opened');
    document.querySelector('.sidebar-overlay').onclick = function () {
      this.classList.remove('opened');
      document.querySelector('.main-wrapper').classList.remove('slide-nav');
    };
  }, [pathname]);
  // const exclusionArray = [
  //   "/reactjs/template/dream-pos/index-three",
  //   "/reactjs/template/dream-pos/index-four",
  //   "/reactjs/template/dream-pos/index-two",
  //   "/reactjs/template/dream-pos/index-one",
  // ];
  // if (exclusionArray.indexOf(window.location.pathname) >= 0) {
  //   return "";
  // }

  return (
    <>
      <div
        className={`sidebar index-4 ${
          pathname.includes('/index-three') ? 'd-none' : ''
        }`}
        id='sidebar'
      >
        <Scrollbars>
          <div className='slimScrollDiv'>
            <div className='sidebar-inner slimscroll'>
              <div
                id='sidebar-menu'
                className='sidebar-menu'
                onMouseOver={expandMenuOpen}
                onMouseLeave={expandMenu}
              >
                {/* Dasbor */}
                <ul>
                  <li className='submenu-open'>
                    <h6 className='submenu-hdr fw-bold'>{t('dasbor.title')}</h6>
                    <ul>
                      <SideBarLink
                        text={t('dasbor.dasbor')}
                        href={`/${locale}`}
                        icon={'grid'}
                        urlInclude={`/` || '/en'}
                      />
                      <SideBarLink
                        text={t('dasbor.persediaan-barang')}
                        href={`/${locale}/persediaan-barang`}
                        icon={'grid'}
                        urlInclude={
                          '/persediaan-barang' || '/en/persediaan-barang'
                        }
                      />
                      <SideBarLink
                        text={t('dasbor.penjualan')}
                        href={`/${locale}/penjualan`}
                        icon={'grid'}
                        urlInclude={'/penjualan' || '/en/penjualan'}
                      />
                      <SideBarLink
                        text={t('dasbor.perawatan-hewan')}
                        href={`/${locale}/perawatan-hewan`}
                        icon={'grid'}
                        urlInclude={'/perawatan-hewan' || '/en/perawatan-hewan'}
                      />
                      <SideBarLink
                        text={t('dasbor.hutang')}
                        href={`/${locale}/hutang`}
                        icon={'grid'}
                        urlInclude={'/hutang' || '/en/hutang'}
                      />
                      <SideBarLink
                        text={t('dasbor.piutang')}
                        href={`/${locale}/piutang`}
                        icon={'grid'}
                        urlInclude={'/piutang' || '/en/piutang'}
                      />
                      <SideBarLink
                        text={t('dasbor.penuaan')}
                        href={`/${locale}/penuaan`}
                        icon={'grid'}
                        urlInclude={'/penuaan' || '/en/penuaan'}
                      />
                    </ul>
                  </li>
                </ul>
                {/* Dasbor */}
                {/* Master */}
                <ul>
                  <li className='submenu-open'>
                    <h6 className='submenu-hdr fw-bold'>{t('master.title')}</h6>
                    <ul>
                      {/* kode-transaksi */}
                      <SubMenuContainer
                        text={t('master.kode-transaksi.title')}
                        isSideMenu={isSideMenu}
                        state={'kode-transaksi-submenu'}
                        icon={'box'}
                        urlInclude={'/kode-transaksi'}
                        toggleSidebar={() =>
                          toggleSidebar(
                            isSideMenu == 'kode-transaksi-submenu'
                              ? ''
                              : 'kode-transaksi-submenu'
                          )
                        }
                      >
                        {isSideMenu == 'kode-transaksi-submenu' && (
                          <ul>
                            <SideBarLink
                              text={t('master.kode-transaksi.grup')}
                              href={`/${locale}`}
                              urlInclude={'/kode-transaksi'}
                            />
                            <SideBarLink
                              text={t('master.kode-transaksi.kode')}
                              href={`/${locale}`}
                              urlInclude={'/kode-transaksi'}
                            />
                          </ul>
                        )}
                      </SubMenuContainer>
                      {/* kode-transaksi */}
                      {/* bank */}
                      <SubMenuContainer
                        text={t('master.bank.title')}
                        isSideMenu={isSideMenu}
                        state={'bank-submenu'}
                        icon={'box'}
                        urlInclude={'/bank'}
                        toggleSidebar={() =>
                          toggleSidebar(
                            isSideMenu == 'bank-submenu' ? '' : 'bank-submenu'
                          )
                        }
                      >
                        {isSideMenu == 'bank-submenu' && (
                          <ul>
                            <SideBarLink
                              text={t('master.bank.bank')}
                              href={`/${locale}`}
                              urlInclude={'/bank'}
                            />
                            <SideBarLink
                              text={t('master.bank.mata-uang')}
                              href={`/${locale}`}
                              urlInclude={'/bank'}
                            />
                            <SideBarLink
                              text={t('master.bank.jangka-waktu-pembayaran')}
                              href={`/${locale}`}
                              urlInclude={'/bank'}
                            />
                          </ul>
                        )}
                      </SubMenuContainer>
                      {/* bank */}
                      {/* pelanggan */}
                      <SubMenuContainer
                        text={t('master.pelanggan.title')}
                        isSideMenu={isSideMenu}
                        state={'pelanggan-submenu'}
                        icon={'box'}
                        urlInclude={'/pelanggan'}
                        toggleSidebar={() =>
                          toggleSidebar(
                            isSideMenu == 'pelanggan-submenu'
                              ? ''
                              : 'pelanggan-submenu'
                          )
                        }
                      >
                        {isSideMenu == 'pelanggan-submenu' && (
                          <ul>
                            <SideBarLink
                              text={t('master.pelanggan.pelanggan')}
                              href={`/${locale}`}
                              urlInclude={'/pelanggan'}
                            />
                            <SideBarLink
                              text={t('master.pelanggan.grup')}
                              href={`/${locale}`}
                              urlInclude={'/pelanggan'}
                            />
                            <SideBarLink
                              text={t('master.pelanggan.outlet')}
                              href={`/${locale}`}
                              urlInclude={'/pelanggan'}
                            />
                          </ul>
                        )}
                      </SubMenuContainer>
                      {/* pelanggan */}
                      {/* pemasok */}
                      <SubMenuContainer
                        text={t('master.pemasok.title')}
                        isSideMenu={isSideMenu}
                        state={'pemasok-submenu'}
                        icon={'box'}
                        urlInclude={'/pemasok'}
                        toggleSidebar={() =>
                          toggleSidebar(
                            isSideMenu == 'pemasok-submenu'
                              ? ''
                              : 'pemasok-submenu'
                          )
                        }
                      >
                        {isSideMenu == 'pemasok-submenu' && (
                          <ul>
                            <SideBarLink
                              text={t('master.pemasok.pemasok')}
                              href={`/${locale}`}
                              urlInclude={'/pemasok'}
                            />
                            <SideBarLink
                              text={t('master.pemasok.grup')}
                              href={`/${locale}`}
                              urlInclude={'/pemasok'}
                            />
                            <SideBarLink
                              text={t('master.pemasok.merek')}
                              href={`/${locale}`}
                              urlInclude={'/pemasok'}
                            />
                          </ul>
                        )}
                      </SubMenuContainer>
                      {/* pemasok */}
                      {/* produk */}
                      <SubMenuContainer
                        text={t('master.produk.title')}
                        isSideMenu={isSideMenu}
                        state={'produk-submenu'}
                        icon={'box'}
                        urlInclude={'/produk'}
                        toggleSidebar={() =>
                          toggleSidebar(
                            isSideMenu == 'produk-submenu'
                              ? ''
                              : 'produk-submenu'
                          )
                        }
                      >
                        {isSideMenu == 'produk-submenu' && (
                          <ul>
                            <SideBarLink
                              text={t('master.produk.tipe')}
                              href={`/${locale}`}
                              urlInclude={'/produk'}
                            />
                            <SideBarLink
                              text={t('master.produk.grup')}
                              href={`/${locale}`}
                              urlInclude={'/produk'}
                            />
                            <SideBarLink
                              text={t('master.produk.variasi')}
                              href={`/${locale}`}
                              urlInclude={'/produk'}
                            />
                            <SubMenuContainerL2
                              text={t('master.produk.satuan.title')}
                              isSideMenu={isSideMenuTwo}
                              state={'satuan-submenu'}
                              urlInclude={'/satuan'}
                              toggleSidebar={() =>
                                toggleSidebarTwo(
                                  isSideMenuTwo == 'satuan-submenu'
                                    ? ''
                                    : 'satuan-submenu'
                                )
                              }
                            >
                              {isSideMenuTwo === 'satuan-submenu' && (
                                <ul className='ms-3'>
                                  <SideBarLink
                                    text={t(
                                      'master.produk.satuan.jenis-satuan'
                                    )}
                                    href={`/${locale}`}
                                    urlInclude={'/satuan'}
                                  />
                                  <SideBarLink
                                    text={t('master.produk.satuan.satuan')}
                                    href={`/${locale}`}
                                    urlInclude={'/satuan'}
                                  />
                                </ul>
                              )}
                            </SubMenuContainerL2>
                            <SideBarLink
                              text={t('master.produk.etalase')}
                              href={`/${locale}`}
                              urlInclude={'/produk'}
                            />
                            <SideBarLink
                              text={t('master.produk.gudang')}
                              href={`/${locale}`}
                              urlInclude={'/produk'}
                            />
                            <SideBarLink
                              text={t('master.produk.jenis-peliharaan')}
                              href={`/${locale}`}
                              urlInclude={'/produk'}
                            />
                            <SideBarLink
                              text={t('master.produk.ras-peliharaan')}
                              href={`/${locale}`}
                              urlInclude={'/produk'}
                            />
                          </ul>
                        )}
                      </SubMenuContainer>
                      {/* produk */}
                      {/* kasir */}
                      <SubMenuContainer
                        text={t('master.kasir.title')}
                        isSideMenu={isSideMenu}
                        state={'kasir-submenu'}
                        icon={'box'}
                        urlInclude={'/kasir'}
                        toggleSidebar={() =>
                          toggleSidebar(
                            isSideMenu == 'kasir-submenu' ? '' : 'kasir-submenu'
                          )
                        }
                      >
                        {isSideMenu == 'kasir-submenu' && (
                          <ul>
                            <SideBarLink
                              text={t('master.kasir.metode-pembayaran')}
                              href={`/${locale}`}
                              urlInclude={'/kasir'}
                            />
                          </ul>
                        )}
                      </SubMenuContainer>
                      {/* kasir */}
                      {/* pengiriman */}
                      <SubMenuContainer
                        text={t('master.pengiriman.title')}
                        isSideMenu={isSideMenu}
                        state={'pengiriman-submenu'}
                        icon={'box'}
                        urlInclude={'/pengiriman'}
                        toggleSidebar={() =>
                          toggleSidebar(
                            isSideMenu == 'pengiriman-submenu'
                              ? ''
                              : 'pengiriman-submenu'
                          )
                        }
                      >
                        {isSideMenu == 'pengiriman-submenu' && (
                          <ul>
                            <SideBarLink
                              text={t('master.pengiriman.jenis-pengiriman')}
                              href={`/${locale}`}
                              urlInclude={'/jenis-pengiriman'}
                            />
                            <SideBarLink
                              text={t('master.pengiriman.pengiriman')}
                              href={`/${locale}`}
                              urlInclude={'/pengiriman'}
                            />
                            <SubMenuContainerL2
                              text={t(
                                'master.pengiriman.batas-administratif.title'
                              )}
                              isSideMenu={isSideMenuTwo}
                              state={'batas-administratif-submenu'}
                              urlInclude={'/batas-administratif'}
                              toggleSidebar={() =>
                                toggleSidebarTwo(
                                  isSideMenuTwo == 'batas-administratif-submenu'
                                    ? ''
                                    : 'batas-administratif-submenu'
                                )
                              }
                            >
                              {isSideMenuTwo ===
                                'batas-administratif-submenu' && (
                                <ul className='ms-3'>
                                  <SideBarLink
                                    text={t(
                                      'master.pengiriman.batas-administratif.negara'
                                    )}
                                    href={`/${locale}`}
                                    urlInclude={'/pengiriman'}
                                  />
                                  <SideBarLink
                                    text={t(
                                      'master.pengiriman.batas-administratif.provinsi'
                                    )}
                                    href={`/${locale}`}
                                    urlInclude={'/pengiriman'}
                                  />
                                  <SideBarLink
                                    text={t(
                                      'master.pengiriman.batas-administratif.kota'
                                    )}
                                    href={`/${locale}`}
                                    urlInclude={'/pengiriman'}
                                  />
                                  <SideBarLink
                                    text={t(
                                      'master.pengiriman.batas-administratif.kabupaten'
                                    )}
                                    href={`/${locale}`}
                                    urlInclude={'/pengiriman'}
                                  />
                                  <SideBarLink
                                    text={t(
                                      'master.pengiriman.batas-administratif.kecamatan'
                                    )}
                                    href={`/${locale}`}
                                    urlInclude={'/pengiriman'}
                                  />
                                </ul>
                              )}
                            </SubMenuContainerL2>
                          </ul>
                        )}
                      </SubMenuContainer>
                      {/* pengiriman */}
                      {/* staf */}
                      <SubMenuContainer
                        text={t('master.staf.title')}
                        isSideMenu={isSideMenu}
                        state={'staf-submenu'}
                        icon={'box'}
                        urlInclude={'/staf'}
                        toggleSidebar={() =>
                          toggleSidebar(
                            isSideMenu == 'staf-submenu' ? '' : 'staf-submenu'
                          )
                        }
                      >
                        {isSideMenu == 'staf-submenu' && (
                          <ul>
                            <SideBarLink
                              text={t('master.staf.staf')}
                              href={`/${locale}`}
                              urlInclude={'/jenis-staf'}
                            />
                            <SideBarLink
                              text={t('master.staf.departemen')}
                              href={`/${locale}`}
                              urlInclude={'/staf'}
                            />
                            <SideBarLink
                              text={t('master.staf.groomer')}
                              href={`/${locale}`}
                              urlInclude={'/staf'}
                            />
                          </ul>
                        )}
                      </SubMenuContainer>
                      {/* staf */}
                      {/* pendapatan/pengeluaran */}
                      <SubMenuContainer
                        text={t('master.pendapatan/pengeluaran.title')}
                        isSideMenu={isSideMenu}
                        state={'pendapatan/pengeluaran-submenu'}
                        icon={'box'}
                        urlInclude={'/pendapatan/pengeluaran'}
                        toggleSidebar={() =>
                          toggleSidebar(
                            isSideMenu == 'pendapatan/pengeluaran-submenu'
                              ? ''
                              : 'pendapatan/pengeluaran-submenu'
                          )
                        }
                      >
                        {isSideMenu == 'pendapatan/pengeluaran-submenu' && (
                          <ul>
                            <SideBarLink
                              text={t(
                                'master.pendapatan/pengeluaran.jenis-transaksi'
                              )}
                              href={`/${locale}`}
                              urlInclude={'/jenis-staf'}
                            />
                          </ul>
                        )}
                      </SubMenuContainer>
                      {/* pendapatan/pengeluaran */}
                    </ul>
                  </li>
                </ul>
                {/* Master */}
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default Sidebar;
