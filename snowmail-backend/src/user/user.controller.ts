import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Adding a new user
  @Post()
  addUser(
    @Body('id') id: number,
    @Body('firstname') firstname: string,
    @Body('email') email: string,
    @Body('school') school: string,
    @Body('major') major: string,
    @Body('gpa') gpa: number,
    @Body('username') username: string,
  ): any {
    const generatedId = this.userService.createUser(id, firstname, email, school, major, gpa, username);  
    return { id: generatedId };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
