/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  LogOut,
  User,
  Lock,
  GraduationCap,
  Eye,
  EyeOff,
  Mail,
  Phone,
  MapPin,
  Code,
  BookOpen,
  AlertCircle,
  Copy,
  Printer
} from 'lucide-react';

export default function App() {
  // State login
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [studyLevel, setStudyLevel] = useState<'D3' | 'D4'>('D4');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [copiedNote, setCopiedNote] = useState('');

  // Kredensial valid sesuai instruksi
  const VALID_NIM = '2024140003';
  const VALID_PASSWORD = 'Panjaitan07';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanNim = nim.trim();
    const cleanPassword = password.trim();

    if (!cleanNim) {
      setErrorMessage('Silakan masukkan NIM terlebih dahulu.');
      return;
    }

    if (!cleanPassword) {
      setErrorMessage('Silakan masukkan Password terlebih dahulu.');
      return;
    }

    if (!studyLevel) {
      setErrorMessage('Silakan pilih jenjang studi (D3 atau D4).');
      return;
    }

    // Validasi NIM dan Password
    if (cleanNim === VALID_NIM && cleanPassword === VALID_PASSWORD) {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setErrorMessage('NIM atau Password salah. Periksa kembali kredensial di bawah halaman.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setNim('');
    setPassword('');
    setErrorMessage('');
  };

  const autofillCredentials = () => {
    setNim(VALID_NIM);
    setPassword(VALID_PASSWORD);
    setCopiedNote('Kredensial berhasil disalin ke form!');
    setTimeout(() => setCopiedNote(''), 3000);
  };

  /* =========================================================================
     HALAMAN CV OWNER (DITAMPILKAN SETELAH LOGIN SUKSES)
     Perpaduan Warna: Hijau Tua (#194435), Cokelat Muda (#C2956E / #D8B28B), Putih (#FFFFFF)
     ========================================================================= */
  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F6F8F6] text-[#1E293B] py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Tombol Aksi Atas: Log Out & Cetak */}
        <div className="w-full max-w-4xl flex items-center justify-between mb-6 no-print">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#194435]"></span>
            <span className="text-sm font-semibold text-[#194435] tracking-wide uppercase">
              Curriculum Vitae Mahasiswa
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#194435] bg-white border border-[#D5C1AA] rounded-md hover:bg-[#F2ECE4] transition-colors cursor-pointer shadow-xs"
              title="Cetak CV"
            >
              <Printer className="w-4 h-4 text-[#C2956E]" />
              <span className="hidden sm:inline">Cetak CV</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#194435] hover:bg-[#123126] border border-[#194435] rounded-md transition-colors cursor-pointer shadow-xs"
            >
              <LogOut className="w-4 h-4 text-[#D8B28B]" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Kartu Utama CV */}
        <div className="w-full max-w-4xl bg-white border border-[#E0D7CC] rounded-xl shadow-md overflow-hidden print-card">
          {/* Header CV: Hijau Tua dengan Aksen Cokelat Muda */}
          <div className="bg-[#194435] text-white p-6 sm:p-8 border-b-4 border-[#C2956E]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Foto Profil */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#C2956E] overflow-hidden shrink-0 shadow-md bg-[#225744]">
                <img
                  src="/assets/aistudio/image_71365214.png"
                  alt="Foto Profil Audi Kristina Panjaitan"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>

              {/* Biodata Ringkas */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#225744] text-[#E8D4BE] text-xs font-semibold rounded-full mb-2 tracking-wider uppercase border border-[#377A62]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C2956E]" />
                  Mahasiswa Aktif Jenjang {studyLevel}
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                  Audi Kristina Panjaitan
                </h1>
                <p className="text-[#D8B28B] text-base sm:text-lg font-medium mb-3">
                  Calon Ahli Madya / Sarjana Terapan Teknologi Informasi
                </p>

                {/* Info Baris Kontak */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-[#E2EBE5]">
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#C2956E]" />
                    NIM: <strong className="text-white font-mono">{nim || VALID_NIM}</strong>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-[#C2956E]" />
                    audikristina234@gmail.com
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-[#C2956E]" />
                    +62 852 - 6079 - 7067
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#C2956E]" />
                    Sumatera Utara, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Konten Isi CV */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Bagian 1: Tentang Saya */}
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-[#E9DFD3]">
                <User className="w-5 h-5 text-[#194435]" />
                <h2 className="text-lg font-bold text-[#194435] tracking-wide uppercase">
                  Tentang Saya
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                Mahasiswa jenjang <strong className="text-[#194435]">{studyLevel}</strong> dengan NIM <strong className="text-[#194435] font-mono">{nim || VALID_NIM}</strong> yang memiliki minat tinggi dan antusiasme mendalam dalam bidang pengembangan sistem informasi, perancangan antarmuka web yang bersih dan intuitif, serta manajemen basis data. Memiliki kedisiplinan yang tinggi, kemampuan analisa logika yang solid, serta kemauan berkelanjutan untuk menguasai teknologi industri terkini.
              </p>
            </div>

            {/* Bagian 2: Pendidikan & Jenjang Studi */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-[#E9DFD3]">
                <GraduationCap className="w-5 h-5 text-[#194435]" />
                <h2 className="text-lg font-bold text-[#194435] tracking-wide uppercase">
                  Riwayat Pendidikan
                </h2>
              </div>
              <div className="space-y-4">
                {/* Perguruan Tinggi */}
                <div className="p-4 bg-[#FAF7F3] border-l-4 border-[#194435] rounded-r-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-bold text-[#194435] text-base">
                      Program Pendidikan Vokasi / Sarjana Terapan ({studyLevel})
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#E8DDD0] text-[#714E2F] rounded-full w-fit">
                      2024 - Sekarang
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#C2956E] mb-2">
                    Teknologi Informasi & Rekayasa Komputer
                  </p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-[#4B5563] space-y-1">
                    <li>Nomor Induk Mahasiswa (NIM): <strong className="font-mono text-[#194435]">{nim || VALID_NIM}</strong></li>
                    <li>Status Mahasiswa: Aktif | Tingkat Persiapan & Penguasaan Praktikum Inti</li>
                  </ul>
                </div>

                {/* SMA / SMK */}
                <div className="p-4 bg-[#FAF7F3] border-l-4 border-[#C2956E] rounded-r-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-bold text-[#194435] text-base">
                      Sekolah Menengah Atas / Kejuruan
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#E8DDD0] text-[#714E2F] rounded-full w-fit">
                      Lulus 2024
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563]">
                    Menyelesaikan pendidikan menengah dengan predikat memuaskan, aktif dalam kegiatan organisasi siswa dan klub sains/komputer.
                  </p>
                </div>
              </div>
            </div>

            {/* Bagian 3: Keahlian Teknis & Kemampuan */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-[#E9DFD3]">
                <Code className="w-5 h-5 text-[#194435]" />
                <h2 className="text-lg font-bold text-[#194435] tracking-wide uppercase">
                  Keahlian & Kompetensi
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Hard Skills */}
                <div className="border border-[#E4DBD0] rounded-lg p-4 bg-white">
                  <h4 className="text-sm font-bold text-[#194435] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#194435]"></span>
                    Kemampuan Teknis (Hard Skills)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5 & CSS3', 'JavaScript', 'Responsive Web Design', 'Tailwind CSS', 'Git & GitHub', 'Dasar Database SQL', 'UI/UX Fundamentals'].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-[#EDF3EF] text-[#194435] border border-[#C5DDCF] text-xs font-semibold rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="border border-[#E4DBD0] rounded-lg p-4 bg-white">
                  <h4 className="text-sm font-bold text-[#714E2F] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C2956E]"></span>
                    Keahlian Interpersonal (Soft Skills)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Problem Solving', 'Kerjasama Tim', 'Manajemen Waktu', 'Komunikasi Efektif', 'Kemampuan Adaptasi Cepat', 'Ketelitian & Disiplin'].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-[#F9F5F0] text-[#714E2F] border border-[#E7D6C5] text-xs font-semibold rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CV */}
          <div className="bg-[#FAF7F3] px-6 py-4 border-t border-[#E8DDD0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-2">
            <span>Curriculum Vitae Resmi Mahasiswa — Hak Cipta &copy; 2026 Audi Kristina Panjaitan</span>
            <span className="font-mono text-[#194435] font-semibold">NIM: {nim || VALID_NIM} | Jenjang: {studyLevel}</span>
          </div>
        </div>

        {/* Tombol Logout Bawah Tambahan untuk Kemudahan Navigasi */}
        <div className="mt-6 mb-8 no-print">
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#194435] hover:bg-[#123126] rounded-lg transition-colors shadow-sm cursor-pointer border border-[#194435]"
          >
            <LogOut className="w-4 h-4 text-[#D8B28B]" />
            <span>Kembali ke Halaman Log In</span>
          </button>
        </div>
      </div>
    );
  }

  /* =========================================================================
     HALAMAN LOGIN (PERPADUAN HIJAU TUA, PUTIH, DAN COKELAT MUDA)
     NIM: 2024140003
     Password: Panjaitan07
     Jenjang Studi: D3 atau D4
     Teks biasa dicantumkan di bawah halaman login sesuai instruksi
     ========================================================================= */
  return (
    <div className="min-h-screen bg-[#F6F8F6] text-[#1E293B] flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8">
      {/* Spacer atas */}
      <div></div>

      {/* Kontainer Form Login */}
      <div className="w-full max-w-md mx-auto">
        {/* Kartu Form Login */}
        <div className="bg-white border border-[#E0D7CC] rounded-2xl shadow-xl overflow-hidden">
          {/* Header Kartu: Hijau Tua dengan aksen Cokelat Muda */}
          <div className="bg-[#194435] p-6 text-center border-b-4 border-[#C2956E]">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#225744] border-2 border-[#C2956E] mb-3 text-[#D8B28B] shadow-inner">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Portal Akademik Mahasiswa
            </h1>
            <p className="text-[#D8B28B] text-xs sm:text-sm mt-1">
              Silakan login untuk mengakses Curriculum Vitae Owner
            </p>
          </div>

          {/* Form Login */}
          <form onSubmit={handleLogin} className="p-6 sm:p-8 space-y-5">
            {/* Alert Error jika salah */}
            {errorMessage && (
              <div className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm rounded-lg animate-shake">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="leading-snug">{errorMessage}</div>
              </div>
            )}

            {/* Input NIM */}
            <div>
              <label htmlFor="nim" className="block text-xs sm:text-sm font-semibold text-[#194435] mb-1.5">
                Nomor Induk Mahasiswa (NIM)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#714E2F]">
                  <User className="w-5 h-5" />
                </div>
                <input
                  id="nim"
                  type="text"
                  value={nim}
                  onChange={(e) => setNim(e.target.value)}
                  placeholder="Masukkan NIM (2024140003)"
                  className="w-full pl-10 pr-3 py-2.5 text-sm bg-white border border-[#D5C1AA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#194435] focus:border-[#194435] transition-all text-[#1F2937] placeholder-[#9CA3AF]"
                  required
                />
              </div>
            </div>

            {/* Input Password */}
            <div>
              <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-[#194435] mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#714E2F]">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan Password (Panjaitan07)"
                  className="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-[#D5C1AA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#194435] focus:border-[#194435] transition-all text-[#1F2937] placeholder-[#9CA3AF]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#714E2F] hover:text-[#194435] cursor-pointer"
                  title={showPassword ? 'Sembunyikan password' : 'Lihat password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Pilihan Jenjang Studi (D3 atau D4) */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-[#194435] mb-1.5">
                Pilihan Jenjang Studi
              </label>
              <div className="grid grid-cols-2 gap-3">
                {/* Opsi D3 */}
                <label
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    studyLevel === 'D3'
                      ? 'border-[#194435] bg-[#EDF3EF] text-[#194435] font-bold shadow-xs'
                      : 'border-[#E0D7CC] bg-white text-[#4B5563] hover:border-[#C2956E] hover:bg-[#FAF7F3]'
                  }`}
                >
                  <input
                    type="radio"
                    name="studyLevel"
                    value="D3"
                    checked={studyLevel === 'D3'}
                    onChange={() => setStudyLevel('D3')}
                    className="w-4 h-4 text-[#194435] focus:ring-[#194435] accent-[#194435]"
                  />
                  <span className="text-sm">Jenjang D3</span>
                </label>

                {/* Opsi D4 */}
                <label
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    studyLevel === 'D4'
                      ? 'border-[#194435] bg-[#EDF3EF] text-[#194435] font-bold shadow-xs'
                      : 'border-[#E0D7CC] bg-white text-[#4B5563] hover:border-[#C2956E] hover:bg-[#FAF7F3]'
                  }`}
                >
                  <input
                    type="radio"
                    name="studyLevel"
                    value="D4"
                    checked={studyLevel === 'D4'}
                    onChange={() => setStudyLevel('D4')}
                    className="w-4 h-4 text-[#194435] focus:ring-[#194435] accent-[#194435]"
                  />
                  <span className="text-sm">Jenjang D4</span>
                </label>
              </div>
            </div>

            {/* Tombol Login */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#194435] hover:bg-[#123126] text-white text-sm sm:text-base font-bold rounded-lg shadow-md transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 border border-[#194435]"
              >
                <span>Login ke CV Owner</span>
              </button>
            </div>
          </form>
        </div>

        {/* ===================================================================
            INFORMASI KREDENSIAL LOGIN DI BAWAH HALAMAN LOGIN
            Instruksi: "untuk pasword dan nim ini cantumkan di bawah halaman login sebagai teks biasa"
            =================================================================== */}
        <div className="mt-6 p-4 sm:p-5 bg-white border border-[#D5C1AA] rounded-xl shadow-xs text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#714E2F] mb-2">
            Informasi Kredensial Login
          </p>

          <div className="space-y-1 text-sm sm:text-base text-[#1E293B]">
            <p>
              <span className="font-medium text-[#4B5563]">NIM : </span>
              <strong className="font-mono text-[#194435] select-all">2024140003</strong>
            </p>
            <p>
              <span className="font-medium text-[#4B5563]">Password : </span>
              <strong className="font-mono text-[#194435] select-all">Panjaitan07</strong>
            </p>
          </div>

          {/* Tombol opsional bantu klik untuk autofill */}
          <div className="mt-3 pt-3 border-t border-[#EAE3DA]">
            <button
              type="button"
              onClick={autofillCredentials}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#194435] hover:text-[#714E2F] bg-[#FAF7F3] hover:bg-[#F2ECE4] border border-[#D5C1AA] px-3 py-1.5 rounded-md transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-[#C2956E]" />
              <span>Gunakan Kredensial Otomatis</span>
            </button>
            {copiedNote && (
              <p className="text-xs text-[#194435] font-medium mt-1.5">
                {copiedNote}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer sederhana */}
      <footer className="text-center text-xs text-[#6B7280] mt-8">
        <p>Aplikasi Portal Akademik Mahasiswa &bull; Perpaduan Hijau Tua, Putih, dan Cokelat Muda</p>
      </footer>
    </div>
  );
}
